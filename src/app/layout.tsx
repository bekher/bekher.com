import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
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
    "system migration"
  ],
  authors: [{ name: "Greg Bekher" }],
  openGraph: {
    title: "Greg Bekher | Principal Platform Engineer",
    description:
      "Platform engineering consulting for migrations, performance, reliability, and agentic AI.",
    type: "website",
    locale: "en_US",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
