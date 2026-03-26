import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://coreyeudell.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Corey Eudell",
    template: "%s | Corey Eudell",
  },
  description:
    "Engineer. Builder of things that don't need to exist. Software, systems, sailboats.",
  keywords: [
    "software engineer",
    "full stack developer",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "portfolio",
  ],
  authors: [{ name: "Corey Eudell" }],
  creator: "Corey Eudell",
  openGraph: {
    title: "Corey Eudell",
    description:
      "Engineer. Builder of things that don't need to exist.",
    url: siteUrl,
    siteName: "Corey Eudell",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corey Eudell",
    description:
      "Engineer. Builder of things that don't need to exist.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#09090b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg-base text-text-primary">
        {children}
      </body>
    </html>
  );
}
