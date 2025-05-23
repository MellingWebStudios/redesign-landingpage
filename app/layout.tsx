// Project: mellingwebstudios.com
// File Created: 2023-10-01 12:00:00
// Author: Melling WebStudios (
import * as React from "react";
import type { Metadata } from "next";
import { Geist as GeistSans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Preloader from "@/components/Preloader"; // ← import it
import ClientLayout from "./ClientLayout";

const geist = GeistSans({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Melling WebStudios",
    default: "Melling WebStudios | High-Performance Web Experiences",
  },
  metadataBase: new URL("https://mellingwebstudios.com"),
  description:
    "Premium React & Next.js development for small businesses looking to grow online with lightning-fast, conversion-focused websites.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mellingwebstudios.com",
    siteName: "Melling WebStudios",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Melling WebStudios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@mellingwebstudios",
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta name="color-scheme" content="light" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body className={`${geist.variable} font-geist antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
