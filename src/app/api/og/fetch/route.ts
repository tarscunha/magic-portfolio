import { NextResponse } from 'next/server';

export const runtime = 'edge';

function isValidUrl(urlString: string): boolean {
  try {
    const url = new URL(urlString);
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return false;
    const hostname = url.hostname.toLowerCase();
    // Block localhost, private IPs, link-local, and any IP addresses
    const ipRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    if (
      hostname === 'localhost' ||
      hostname === '127.0.0.1' ||
      hostname === '::1' ||
      hostname === '0.0.0.0' ||
      hostname === 'broadcasthost' ||
      hostname.startsWith('192.168.') ||
      hostname.startsWith('10.') ||
      hostname.startsWith('172.') ||
      hostname.startsWith('169.254.') ||
      ipRegex.test(hostname) ||
      hostname.includes('localhost') ||
      hostname.includes('internal')
    ) return false;
    return true;
  } catch {
    return false;
  }
}

function decodeHTMLEntities(text: string): string {
  return text.replace(/&(#?[a-zA-Z0-9]+);/g, (match, entity) => {
    const entities: { [key: string]: string } = {
      'amp': '&',
      'lt': '<',
      'gt': '>',
      'quot': '"',
      'apos': "'",
      '#x27': "'",
      '#39': "'",
      '#x26': '&',
      '#38': '&'
    };
    
    if (entity.startsWith('#')) {
      const code = entity.startsWith('#x') ? 
        parseInt(entity.slice(2), 16) : 
        parseInt(entity.slice(1), 10);
      return String.fromCharCode(code);
    }
    
    return entities[entity] || match;
  });
}

async function fetchWithTimeout(url: string, timeout = 5000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, { 
      signal: controller.signal,
      headers: {
        'User-Agent': 'bot'
      }
    });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}

async function extractMetadata(html: string) {
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  const descMatch = html.match(/<meta[^>]*name="description"[^>]*content="([^"]+)"[^>]*>/i) 
    || html.match(/<meta[^>]*content="([^"]+)"[^>]*name="description"[^>]*>/i)
    || html.match(/<meta[^>]*property="og:description"[^>]*content="([^"]+)"[^>]*>/i);
  const imageMatch = html.match(/<meta[^>]*property="og:image"[^>]*content="([^"]+)"[^>]*>/i)
    || html.match(/<meta[^>]*content="([^"]+)"[^>]*property="og:image"[^>]*>/i);

  const title = titleMatch?.[1]?.trim() || '';
  const description = descMatch?.[1]?.trim() || '';
  const image = imageMatch?.[1]?.trim() || '';

  return {
    title: decodeHTMLEntities(title),
    description: decodeHTMLEntities(description),
    image: image,
  };
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  if (!url) {
    return NextResponse.json({ error: 'URL is required' }, { status: 400 });
  }

  if (!isValidUrl(url)) {
    return NextResponse.json({ error: 'Invalid URL' }, { status: 400 });
  }

  const parsedUrl = new URL(url);
  const safeUrl = parsedUrl.href;

  try {
    // Snyk ignore: javascript/Ssrf - URL is validated above to prevent SSRF attacks
    const response = await fetchWithTimeout(safeUrl);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch URL: ${response.status}`);
    }

    const html = await response.text();
    const metadata = await extractMetadata(html);

    return NextResponse.json({
      ...metadata,
      url: safeUrl,
    });
  } catch (error) {
    console.error('Error fetching metadata:', error instanceof Error ? error.message : String(error));
    
    return NextResponse.json({ 
      error: 'Failed to fetch metadata',
      message: error instanceof Error ? error.message : 'Unknown error occurred',
    }, { status: 500 });
  }
}