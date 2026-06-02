import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RLC Studio — Upcoming Game Studio",
  description:
    "RLC Studio is an upcoming game studio built from passion, community, and the belief that great games start with great people. From a small gaming group to a team of creators.",
  keywords: [
    "RLC Studio",
    "game studio",
    "indie games",
    "game development",
    "RLC Games",
  ],
  authors: [{ name: "RLC Studio" }],
  openGraph: {
    title: "RLC Studio — Upcoming Game Studio",
    description:
      "An upcoming game studio built from passion, community, and the belief that great games start with great people.",
    type: "website",
    siteName: "RLC Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "RLC Studio — Upcoming Game Studio",
    description:
      "An upcoming game studio built from passion, community, and the belief that great games start with great people.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-canvas-night text-on-primary">
        {children}
      </body>
    </html>
  );
}
