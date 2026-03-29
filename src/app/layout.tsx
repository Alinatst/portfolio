import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["cyrillic", "latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["cyrillic", "latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alina - Frontend Developer Portfolio",
  description: "Personal portfolio of a Frontend Developer specializing in Next.js, TypeScript, and React.",
  keywords: ["frontend", "developer", "portfolio", "Next.js", "TypeScript", "React"],
  authors: [{ name: "Alina" }],
  openGraph: {
    title: "Alina - Frontend Developer",
    description: "Personal portfolio of a Frontend Developer",
    url: "https://github.com/Alinatst",
    siteName: "Alina Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}