import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@/components/analytics";
import ClientLayout from "./client";
import "./globals.css";

export const metadata: Metadata = {
  title: "Munazzah Rakhangi | Tech Lead & AI Specialist",
  description:
    "Portfolio of Munazzah Rakhangi, a Tech Lead & Full-Stack Developer specializing in AI, Machine Learning, React.js, FastAPI, and Healthcare Technology.",
  keywords: [
    "Munazzah Rakhangi",
    "Tech Lead",
    "Full Stack Developer",
    "Artificial Intelligence",
    "Machine Learning",
    "React.js",
    "FastAPI",
    "Healthcare Technology",
  ],
  authors: [{ name: "Munazzah Rakhangi" }],
  creator: "Munazzah Rakhangi",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://munazzahrakhangi.com",
    title: "Munazzah Rakhangi | Tech Lead & AI Specialist",
    description:
      "Portfolio of Munazzah Rakhangi, a Tech Lead & Full-Stack Developer specializing in AI, Machine Learning, React.js, FastAPI, and Healthcare Technology.",
    siteName: "Munazzah Rakhangi Portfolio",
    images: [{ url: "/favicon.png", width: 512, height: 512, alt: "Munazzah Rakhangi Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Munazzah Rakhangi | Tech Lead & AI Specialist",
    description:
      "Portfolio of Munazzah Rakhangi, a Tech Lead & Full-Stack Developer specializing in AI, Machine Learning, React.js, FastAPI, and Healthcare Technology.",
    creator: "@munazzahrakhangi",
    images: ["/favicon.png"],
  },
  robots: { index: true, follow: true },
  generator: "v0.app",
  // Silence local OG warning
  metadataBase: new URL("http://localhost:3000"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
        <Analytics />
      </body>
    </html>
  );
}
