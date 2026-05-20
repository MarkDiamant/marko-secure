import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Marko Secure",
  description: "Secure fencing and gates for homes, sites and developments.",
  icons: {
    icon: "/favicon.jpeg",
  },
  openGraph: {
    title: "Marko Secure",
    description:
      "Secure fencing and gates for homes, sites and developments.",
    url: "https://www.markosecure.com",
    siteName: "Marko Secure",
    images: [
      {
        url: "https://www.markosecure.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Marko Secure",
      },
    ],
    locale: "en_GB",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
