import type { Metadata } from "next";
import { Anton } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar/navbar";
import CustomCursor from "@/components/cursor/CustomCursor";
import Preloader from "@/components/Preloader/Preloader";
import ParticleBackground from "@/components/ParticleBackground/ParticleBackground";

const antonFont = Anton({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const SITE_URL = "https://sarrahgandhi.com";
const SITE_TITLE = "Sarrah Gandhi — Developer & Designer";
const SITE_DESCRIPTION =
  "Portfolio of Sarrah Gandhi — frontend developer and designer building brand identities, full-stack apps, and interfaces sharp enough that users notice without knowing why.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s · Sarrah Gandhi",
  },
  description: SITE_DESCRIPTION,
  applicationName: "Sarrah Gandhi",
  authors: [{ name: "Sarrah Gandhi", url: SITE_URL }],
  creator: "Sarrah Gandhi",
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Sarrah Gandhi",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    creator: "@sarrahgandhi",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={antonFont.variable}>
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-BB7NZKEBXG"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BB7NZKEBXG');
            `,
          }}
        />
      </head>
      <body>
        <CustomCursor />
        <Preloader />
        <ParticleBackground />
        {children}
      </body>
    </html>
  );
}
