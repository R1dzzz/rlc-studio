import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./i18n/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://rlc.studio"),
  title: {
    default: "RLC Studio — Upcoming Game Studio",
    template: "%s | RLC Studio",
  },
  description:
    "RLC Studio is an upcoming game studio built from passion, community, and the belief that great games start with great people. From a small gaming group to a team of creators.",
  keywords: [
    "RLC Studio",
    "RLC Games",
    "game studio",
    "indie games",
    "game development",
    "indie game studio",
    "Indonesia game studio",
    "upcoming games",
    "video games",
    "game developers",
    "BigBearTeam",
    "Resonate Light Create",
  ],
  authors: [{ name: "RLC Studio" }],
  creator: "RLC Studio",
  publisher: "RLC Studio",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://rlc.studio",
    languages: {
      "en-US": "https://rlc.studio",
      "id-ID": "https://rlc.studio",
      "de-DE": "https://rlc.studio",
      "ja-JP": "https://rlc.studio",
      "ru-RU": "https://rlc.studio",
    },
  },
  openGraph: {
    title: "RLC Studio — Upcoming Game Studio",
    description:
      "An upcoming game studio built from passion, community, and the belief that great games start with great people.",
    url: "https://rlc.studio",
    siteName: "RLC Studio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/rlc-light2.png",
        width: 1200,
        height: 630,
        alt: "RLC Studio - Resonate. Light. Create.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RLC Studio — Upcoming Game Studio",
    description:
      "An upcoming game studio built from passion, community, and the belief that great games start with great people.",
    creator: "@rlcstudio",
    images: ["/images/rlc-light2.png"],
  },
  category: "games",
  classification: "Game Studio, Indie Games, Video Game Development",
  verification: {
    google: "verification_token",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/rlc-light1.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/images/rlc-light1.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/images/rlc-light1.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  other: {
    "msapplication-TileColor": "#000000",
    "msapplication-TileImage": "/images/rlc-light1.png",
    "msapplication-config": "/browserconfig.xml",
  },
};

// JSON-LD Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://rlc.studio/#organization",
      name: "RLC Studio",
      alternateName: ["RLC Games", "Resonate Light Create"],
      url: "https://rlc.studio",
      logo: {
        "@type": "ImageObject",
        url: "https://rlc.studio/images/rlc-light2.png",
        width: 512,
        height: 512,
      },
      sameAs: [
        "https://twitter.com/rlcstudio",
        "https://instagram.com/rlcstudio",
        "https://youtube.com/@rlcstudio",
        "https://github.com/R1dzzz",
      ],
      description:
        "RLC Studio is an upcoming game studio built from passion, community, and the belief that great games start with great people.",
      foundingDate: "2021-10-19",
      founders: [
        {
          "@type": "Person",
          name: "Farid Alfiyansah",
        },
        {
          "@type": "Person",
          name: "Halim",
        },
        {
          "@type": "Person",
          name: "Fauzan Yusuf Pratama",
        },
      ],
      slogan: "Resonate. Light. Create.",
      areaServed: "Worldwide",
      knowsAbout: [
        "Game Development",
        "Indie Games",
        "Video Games",
        "Game Design",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://rlc.studio/#website",
      url: "https://rlc.studio",
      name: "RLC Studio",
      description: "Upcoming Game Studio — Resonate. Light. Create.",
      publisher: {
        "@id": "https://rlc.studio/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://rlc.studio/search?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
      inLanguage: ["en", "id", "de", "ja", "ru"],
    },
    {
      "@type": "WebPage",
      "@id": "https://rlc.studio/#webpage",
      url: "https://rlc.studio",
      name: "RLC Studio — Upcoming Game Studio",
      isPartOf: {
        "@id": "https://rlc.studio/#website",
      },
      about: {
        "@id": "https://rlc.studio/#organization",
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://rlc.studio/images/rlc-light2.png",
      },
      description:
        "RLC Studio is an upcoming game studio built from passion, community, and the belief that great games start with great people.",
      inLanguage: "en",
    },
    {
      "@type": "VideoGame",
      name: "RLC Studio Upcoming Title",
      description:
        "The first title from RLC Studio is currently in development. Something is coming.",
      url: "https://rlc.studio",
      author: {
        "@id": "https://rlc.studio/#organization",
      },
      publisher: {
        "@id": "https://rlc.studio/#organization",
      },
      genre: ["Indie", "Adventure"],
      gamePlatform: ["PC", "Console"],
      applicationCategory: "Game",
      operatingSystem: ["Windows", "macOS", "Linux"],
      inLanguage: ["en", "id", "de", "ja", "ru"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="min-h-screen bg-canvas-night text-on-primary">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
