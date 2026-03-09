import type { Metadata } from "next";
import { Montserrat, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-montserrat",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Nexus — Next-Gen Blockchain Infrastructure",
  description:
    "Nexus delivers 120K TPS blockchain with AI-based security and Proof of Stake. Scalable, fast, and developer-friendly infrastructure.",
  keywords: ["blockchain", "smart contracts", "Proof of Stake", "AI security", "Nexus"],
  authors: [{ name: "Nexus" }],
  openGraph: {
    title: "Nexus — Next-Gen Blockchain Infrastructure",
    description:
      "Nexus delivers 120K TPS blockchain with AI-based security and Proof of Stake.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus — Next-Gen Blockchain Infrastructure",
    description: "120K TPS, AI security, Proof of Stake. Scalable blockchain infrastructure.",
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
    <html lang="en">
      <body
        className={`flex min-h-screen flex-col overflow-x-hidden ${montserrat.variable} ${spaceGrotesk.variable}`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
