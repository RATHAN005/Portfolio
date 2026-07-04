import type { Metadata } from "next";
import { Inter, Syne, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rathan — Creative Developer",
  description:
    "Portfolio of Rathan — a creative developer building premium digital experiences at the intersection of design and engineering.",
  keywords: ["creative developer", "portfolio", "web development", "design", "Rathan"],
  authors: [{ name: "Rathan" }],
  openGraph: {
    title: "Rathan — Creative Developer",
    description:
      "Building premium digital experiences at the intersection of design and engineering.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} ${manrope.variable} antialiased`}>
      <body className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
