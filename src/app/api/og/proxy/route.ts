import { NextRequest, NextResponse } from 'next/server';
import fetch from 'node-fetch';
import ssrfFilter from 'ssrf-req-filter';

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

export async function GET(request: NextRequest) {
  try {
    // Get the URL parameter
    const url = new URL(request.url);
    const imageUrl = url.searchParams.get('url');
    
    if (!imageUrl) {
      return NextResponse.json({ error: 'Missing URL parameter' }, { status: 400 });
    }

    if (!isValidUrl(imageUrl)) {
      return NextResponse.json({ error: 'Invalid URL' }, { status: 400 });
    }

    const ALLOWED_HOSTS: Record<string, string> = {
      'images.unsplash.com': 'https://images.unsplash.com',
      'cdn.pixabay.com': 'https://cdn.pixabay.com',
      'i.imgur.com': 'https://i.imgur.com',
    };
    const parsedUrl = new URL(imageUrl);
    const allowedBase = ALLOWED_HOSTS[parsedUrl.hostname.toLowerCase()];
    if (!allowedBase) {
      return NextResponse.json({ error: 'Host not allowed' }, { status: 400 });
    }
    const sanitizedPath = encodeURI(decodeURI(parsedUrl.pathname)).replace(/[^A-Za-z0-9\-_.~!$&'()*+,;=:@/%]/g, '');
    const sanitizedSearch = parsedUrl.search.replace(/[^A-Za-z0-9\-_.~!$&'()*+,;=:@/?%]/g, '');
    const safeUrl: string = allowedBase + sanitizedPath + sanitizedSearch;

    if (!safeUrl.startsWith(allowedBase + '/') && safeUrl !== allowedBase) {
      return NextResponse.json({ error: 'Invalid URL' }, { status: 400 });
    }

    const response = await fetch(safeUrl, {
      agent: ssrfFilter(safeUrl),
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; ImageProxy/1.0)',
      },
    });
    
    if (!response.ok) {
      return NextResponse.json(
        { error: `Failed to fetch image: ${response.status}` },
        { status: response.status }
      );
    }
    
    // Get the image data
    const contentType = response.headers.get('content-type') || 'image/jpeg';
    const imageData = await response.arrayBuffer();
    
    // Return the image with appropriate headers
    return new NextResponse(imageData, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=86400',
      },
    });
  } catch (error) {
    console.error('Error proxying image:', error);
    return NextResponse.json(
      { error: 'Failed to proxy image' },
      { status: 500 }
    );
  }
}
