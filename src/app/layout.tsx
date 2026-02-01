import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bekher.com"),
  title: "Greg Bekher | Principal Platform Engineer & Agentic AI Builder",
  description:
    "Build AWS-native platforms, migrate revenue-critical systems, ship agentic AI, fix site performance, improve reliability at scale.",
  keywords: [
    "platform engineer",
    "consulting",
    "AWS",
    "Next.js",
    "agentic AI",
    "migration",
    "web platform",
    "system migration",
    "platform engineering consultant",
    "AWS consultant",
  ],
  authors: [{ name: "Greg Bekher" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Greg Bekher | Principal Platform Engineer",
    description:
      "Platform engineering consulting for migrations, performance, reliability, and agentic AI.",
    type: "website",
    locale: "en_US",
    url: "https://bekher.com",
    siteName: "Greg Bekher",
  },
  twitter: {
    card: "summary_large_image",
    title: "Greg Bekher | Principal Platform Engineer",
    description:
      "Platform engineering consulting for migrations, performance, reliability, and agentic AI.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Script to prevent flash of wrong theme
const themeScript = `
  (function() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    }
  })();
`;

// JSON-LD structured data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://bekher.com/#person",
      name: "Greg Bekher",
      url: "https://bekher.com",
      jobTitle: "Principal Platform Engineer & Agentic AI Builder",
      description:
        "Principal Platform Engineer specializing in AWS-native platforms, revenue-critical system migrations, agentic AI, and reliability at scale.",
      sameAs: [
        "https://linkedin.com/in/bekher",
        "https://github.com/bekher",
      ],
      knowsAbout: [
        "AWS",
        "Platform Engineering",
        "Agentic AI",
        "System Migrations",
        "Web Platform",
        "Devops",
        "Operational Excellence",
        "Clinical Workflow Automation",
        "Next.js",
        "TypeScript",
        "Python",
        "Java"
      ],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "University of Maryland, College Park",
      },
      worksFor: {
        "@type": "Organization",
        name: "Inline",
        url: "https://getinline.io",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://bekher.com/#service",
      name: "Greg Bekher Consulting",
      url: "https://bekher.com",
      provider: {
        "@id": "https://bekher.com/#person",
      },
      description:
        "Platform engineering consulting for AWS migrations, agentic AI implementation, web performance optimization, and reliability engineering.",
      areaServed: "Worldwide",
      serviceType: [
        "Platform Engineering Consulting",
        "AWS Consulting",
        "System Migration",
        "Agentic AI Development",
        "Web Performance Optimization",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://bekher.com/#website",
      url: "https://bekher.com",
      name: "Greg Bekher",
      publisher: {
        "@id": "https://bekher.com/#person",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${montserrat.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
