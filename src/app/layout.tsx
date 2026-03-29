import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";


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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        {/* Листья ДО ThemeProvider и children */}
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}