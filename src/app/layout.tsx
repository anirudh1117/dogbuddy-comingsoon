import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ToasterProvider } from "@/components/providers/toaster-provider";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TailsBuddy Coming Soon | Dog Walking Services",
  description: "Premium dog walking services launching soon in India.",
  openGraph: {
    title: "TailsBuddy Coming Soon | Dog Walking Services",
    description: "Premium dog walking services launching soon in India.",
    url: "https://tailsbuddy.in",
    siteName: "TailsBuddy",
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
      className={`${plusJakartaSans.variable} ${cormorantGaramond.variable}`}
    >
      <body className="min-h-screen bg-[#f7f2ec] text-[#1e2a24] antialiased">
        {children}
        <ToasterProvider />
      </body>
    </html>
  );
}
