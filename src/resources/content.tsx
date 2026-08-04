import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";
import Link from "next/link";

const person: Person = {
  firstName: "Tars",
  lastName: "Cunha",
  name: `Tars Cunha`,
  role: "Product Designer",
  avatar: "/images/avatar.jpg",
  email: "tarscunha@gmail.com",
  location: "America/New_York", // IANA timezone identifier
  displayLocation: "Boston, MA", // Display location
  languages: ["English", "Portuguese", ], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
  
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/tars-cunha/",
  },

  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/tarscunha",
  },

  // {
  //   name: "Instagram",
  //   icon: "instagram",
  //   link: "https://www.instagram.com/tars_ez_yo/",
  // },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Hi there 👋</>,
  // this is that floating chip at the top of the home page 
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Tars,  a highly versatile designer specializing in UX for complex, high-scale technical platforms.
      After hours, you can find me playing volleyball 🏐
    </> 

  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://calendar.app.google/mzQjYP9jG8XoiDgK9",
  },
  intro: {
    display: true,
    title: "Intro",
    description: (
      <>
        I'm a highly versatile designer specializing in UX for high-scale technical platforms. Proven ability to drive cross-functional alignment and roadmap execution for complex, 0-to-1 initiatives across consumer, enterprise, and developer platforms.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Experience",
    experiences: [
      {
        company: "Snyk",
        timeframe: "Jan 2026 - July 2026",
        role: "Staff Product Designer",
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/about/snyk.png",
            alt: "Snyk logo",
            width: 16,
            height: 9,
          },
        ],
        achievements: [
           <span key="snyk-1">
            I lead the design strategy for <Link target="_blank" href="https://snyk.io/">Snyk's</Link> Developer Experience team, focusing on how millions of developers interact with security within their native environments. My work centers on building both AI-Native and AI-Augmented tools that streamline collaboration between development and security teams, enabling large enterprises to scale innovation without compromising safety.
        
          </span>,
        ],
      },
      {
        company: "Google Firebase",
        timeframe: "2021 - 2025",
        role: "UX Designer",
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/about/firebase-cover.jpg",
            alt: "Firebase logo",
            width: 16,
            height: 9,
          },
        ],
        achievements: [
          <span key="firebase-1">
            Created end-to-end UX for Gemini-powered developer tools in the <Link target="_blank" href="https://console.firebase.google.com/">Firebase Console</Link> and <Link target="_blank" href="https://firebase.studio/">Firebase Studio</Link>, driving business impact across pre-release testing and observability products.
          </span>,
          <span key="firebase-2">
            Scale &amp; Scope: Contributed to the design strategy for products used by over 3 million developers globally, collaborating with a cross-functional team of 30+ engineers and 4 PMs.
          </span>,
          <span key="firebase-3">
            Process &amp; Tools: Defined user research plans, wireframed complex workflows in Figma, and delivered high-fidelity prototypes for pre-release testing and observability features (e.g., <Link target="_blank" rel="noopener noreferrer" href="https://firebase.google.com/products/app-distribution">App Distribution</Link> and <Link target="_blank" rel="noopener noreferrer" href="https://firebase.google.com/products/crashlytics">Crashlytics</Link>).
          </span>,
          <span key="firebase-4">
            Impact: Transformed Firebase App Distribution into a full-fledged testing tool by introducing automatic testing features to complement human testing, leading to the launch of Firebase's very first agent in the console, the <Link target="_blank" href="https://firebase.blog/posts/2025/04/app-testing-agent/"> App Testing Agent.</Link>
          </span>,
        ],
      },
      {
        company: "Google Ads",
        timeframe: "2018 - 2021",
        role: "UX Designer",
        images: [
          {
            src: "/images/about/google-ads-cover.jpg",
            alt: "Google Ads logo",
            width: 16,
            height: 9,
          },
        ],
        achievements: [
          <span key="ads-1">
            Developed results-oriented, information-dense user interfaces for the campaign management tools used by enterprise clients in the <Link target="_blank" href="https://travel.google/partners/hotels">travel industry</Link>.
          </span>,
        ],
      },
      {
        company: "Google Ink",
        timeframe: "2018 - 2015",
        role: "UX Designer",
        images: [
          {
            src: "/images/about/google-ink.png",
            alt: "Google Ink logo",
            width: 16,
            height: 9,
          },
        ],
        achievements: [
          <span key="ink-1">
            Led design and research as the sole UX specialist to integrate drawing/ annotation functionality into high-profile consumer products like <Link target="_blank" href="https://lifehacker.com/tech/drawing-mode-is-google-keeps-best-kept-secret?test_uuid=02DN02BmbRCcASIX6xMQtY9&test_variant=B">Google Keep</Link>, <Link target="_blank" href="https://edu.google.com/intl/ALL_ca/workspace-for-education/products/classroom/">Google Classroom</Link>, and <Link target="_blank" href="https://canvas.apps.chrome/">Canvas</Link>.
          </span>,
        ],
      },
      {
        company: "Google Charts",
        timeframe: "2014 - 2015",
        role: "UX Designer",
        images: [
          {
            src: "/images/about/google-charts.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
        achievements: [
          <span key="charts-1">
            Defined Data Visualization specifications for the Material Design system, impacting millions of users across products like Google Sheets and Analytics, establishing strict accessibility and internationalization standards. <Link target="_blank" href="https://developers-dot-devsite-v2-prod.appspot.com/chart/interactive/docs/gallery">View chart gallery</Link>
          </span>,
        ],
      },
      {
        company: "Vectra Creative",
        timeframe: "2011 - 2014",
        role: "Co-founder & Lead Designer",
        images: [
          {
            src: "/images/about/vectra-logo.png",
            alt: "vectra logo",
            width: 16,
            height: 9,
          },
        ],
        achievements: [
          <span key="vectra-1">
            Managed all business operations, including client relations and hiring, while acting as the primary UX and Visual Designer to deliver finalized branding and web solutions.
          </span>,
        ],
      },
      

    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Middlesex Community College",
        description: <>Associates, Graphic Design • 2006 - 2009</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Skills & Tools",
    skills: [
      {
        title: "Design & Prototyping",
        description: (
          null
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          }, 
          {
            name: "Sketch",
            icon: "sketch",
          },
          {
            name: "Adobe Creative Suite",
            icon: "adobe",
          },
          {
            name: "Design Systems",
            icon: "design-system",
          },
          {
            name: "Data Visualization",
            icon: "data-viz",
          },
          {
            name: "Design Sprints",
            icon: "sprint",
          },
        ],
      },
      {
        title: "Research & Strategy",
        description: (
          null
        ),
        tags: [
          {
            name: "A/B Testing",
            icon: "ab-test",
          },
          {
            name: "Usability Studies",
            icon: "accessibility",
          },
          {
            name: "Research Planning",
            icon: "clipboard",
          },
          {
            name: "Customer Interviews",
            icon: "user-interview",
          },
          {
            name: "Cross-functional Alignment",
            icon: "users",
          },
          {
            name: "Workshop Facilitation",
            icon: "workshop",
          },
        ],
      },  
      {
        title: "Technical Literacy",
        description: (
          null
        ),
        tags: [
          {
            name: "HTML5",
            icon: "html5",
          },
          {
            name: "CSS3",
            icon: "css3",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Git",
            icon: "git",
          },
          {
            name: "VS Code",
            icon: "vscode",
          },
          {
            name: "Claude",
            icon: "claude",
          },
          {
            name: "Firebase Studio",
            icon: "firebase",
          },
          {
            name: "GitHub Copilot",
            icon: "copilot",
          },
          {
            name: "Cursor",
            icon: "cursor",
          },
          {
            name: "CLI",
            icon: "terminal",
          },
        ],
      },  
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: "Featured Projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
