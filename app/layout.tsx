import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";
import TrackPageViews from "@/components/TrackPageView";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jonty's Portfolio",
  description: "A Software Engineer you are looking for your Problems",
  keywords: ["software engineer", "portfolio", "web development", "Jonty", "programming"],
  authors: [{ name: "Jonty", url: "https://jontytejani.com" }],
  openGraph: {
    title: "Jonty's Portfolio",
    description: "A Software Engineer solving your problems with code.",
    url: "https://jontytejani.com",
    siteName: "Jonty's Portfolio",
    images: [
      {
        url: "https://jontytejani.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jonty's Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jonty's Portfolio",
    description: "A Software Engineer solving your problems with code.",
    images: [
      {
        url: "https://jontytejani.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jonty's Portfolio Preview",
      },
    ],
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/Jonty-icon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TrackPageViews />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
