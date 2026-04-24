import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/navbar/navbar";
import CustomCursor from "@/components/cursor/CustomCursor";
import Preloader from "@/components/Preloader/Preloader";
import ParticleBackground from "@/components/ParticleBackground/ParticleBackground";

export const metadata: Metadata = {
  title: "Sarrah Gandhi - Frontend Developer",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-BB7NZKEBXG"></script>
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
