import type { Metadata } from "next";
import { Anton, Work_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const workSans = Work_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-work-sans",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jhaysanyay.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jhay Sanyay Studio — Visual Artist & Illustrator",
    template: "%s | Jhay Sanyay Studio",
  },
  description:
    "Official portfolio and commission booking portal for Jhay Sanyay. Specializing in single cover art, album art, comic illustrations, and brand identity design.",
  keywords: [
    "Jhay Sanyay",
    "Cover Art Designer",
    "Visual Artist Nigeria",
    "Album Art",
    "Single Cover Art",
    "Comic Illustrator",
    "Brand Identity",
    "Logo Designer",
    "Music Artwork",
  ],
  authors: [{ name: "Jhay Sanyay" }],
  creator: "Jhay Sanyay",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Jhay Sanyay Studio — Visual Artist & Illustrator",
    description:
      "Cover art, logos, and comic pages for artists and brands who want the visual to hit as hard as the work does.",
    siteName: "Jhay Sanyay Studio",
    images: [
      {
        url: "/images/cover-art/cover-01.jpg",
        width: 1200,
        height: 1200,
        alt: "Jhay Sanyay Studio Artwork Showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jhay Sanyay Studio — Visual Artist & Illustrator",
    description:
      "Custom cover art, illustrations, and logos. Book your commission ticket online.",
    creator: "@jhaysanyay",
    images: ["/images/cover-art/cover-01.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${workSans.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[var(--ink)] color-[var(--paper)]">
        {children}
      </body>
    </html>
  );
}
