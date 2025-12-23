import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import GradientBackground from "@/components/GradientBackground";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Thumbstop - High-Performance Ad Creatives That Scale",
  description: "Get banger ads that slash your CPA in half. Stealth creatives that convert without looking like ads. Book a call today.",
  keywords: "ad creatives, UGC, performance marketing, paid advertising, creative agency",
  openGraph: {
    title: "Thumbstop - High-Performance Ad Creatives",
    description: "Get banger ads that slash your CPA in half.",
    type: "website",
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/apple-touch-icon.png' }
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${spaceGrotesk.variable} antialiased font-sans`}
        style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
        <GradientBackground />
        {children}
      </body>
    </html>
  );
}
