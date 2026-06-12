import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/config";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#ffffff",
};

const { personal, seo } = siteConfig;

export const metadata: Metadata = {
  title: `${personal.fullName} | ${personal.title}`,
  description: `${personal.subtitle}. Expert in RAG, Text2SQL, MCP Servers, and Production AI Systems.`,
  keywords: seo.keywords,
  openGraph: {
    title: `${personal.fullName} | ${personal.title}`,
    description: `${personal.subtitle}. Expert in RAG, Text2SQL, MCP Servers, and Production AI Systems.`,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white">{children}</body>
    </html>
  );
}
