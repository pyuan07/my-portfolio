import { Inter } from "next/font/google";
import { Metadata } from 'next';
import "./globals.css";
import Header from "@/components/layout/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import Footer from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio.pyuan07.online/'),
  title: {
    default: "Pin Yuan - Software Engineer & Full Stack Developer",
    template: "%s | Pin Yuan"
  },
  description: "Portfolio of Pin Yuan, a Software Engineer and Full Stack Developer specializing in building exceptional digital experiences with modern technologies like Next.js, React, and TypeScript.",
  keywords: ["Software Engineer", "Full Stack Developer", "Web Developer", "React", "Next.js", "TypeScript", "Portfolio", "Pin Yuan", "Singapore", "Malaysia"],
  authors: [{ name: "Ng Pin Yuan", url: "https://portfolio.pyuan07.online/" }],
  creator: "Ng Pin Yuan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio.pyuan07.online/",
    title: "Pin Yuan - Software Engineer & Full Stack Developer",
    description: "Building exceptional digital experiences with modern technologies. View my projects and skills.",
    siteName: "Pin Yuan Portfolio",
    images: [
      {
        url: "/og-image.png", // We should ideally create this or use a screenshot
        width: 1200,
        height: 630,
        alt: "Pin Yuan Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Pin Yuan - Software Engineer & Full Stack Developer",
    description: "Building exceptional digital experiences with modern technologies.",
    images: ["/og-image.png"],
    creator: "@pyuan07" // Placeholder if user has twitter
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.svg", sizes: "16x16", type: "image/svg+xml" },
      { url: "/favicon-32x32.svg", sizes: "32x32", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen flex flex-col`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
        <ScrollProgress />
        <BackToTop />
      </body>
    </html>
  );
}
