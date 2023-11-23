import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "@next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ottr Co.",
  description:
    "Quantiative Trading, Software Engineering, Venture Capital. Focused on building a powerhouse based in Philadelphia, Pennsylvania.",
  generator: "Next.js",
  applicationName: "ottr Co.",
  keywords: [
    "finance",
    "developer",
    "financial developer",
    "quantitative",
    "quantitative trading",
    "financial consulting",
    "venture capital",
    "creative",
    "financial engineering",
    "creative engineer",
    "philadelphia",
    "tech",
    "software",
    "philadelphia software developers",
    "portfolio management",
    "crypto venture capital",
    "product engineering",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "ottr Co.",
    description:
      "Quantiative Trading, Software Engineering, Venture Capital. Focused on building a powerhouse based in Philadelphia, Pennsylvania.",
    url: "https://www.ottr.site",
    siteName: "www.ottr.site",
    images: [
      {
        
        url: "",
        width: 1200,
        height: 630,
        alt: "ottr Co.",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ottr Co.",
    description:
      "Quantiative Trading, Software Engineering, Venture Capital. Focused on building a powerhouse based in Philadelphia, Pennsylvania.",
    creator: "0xOwen",
    creatorId: "",
    images: [
      "",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
