import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";

import "./globals.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Navbar from "@/components/navbar";
import Header from "@/components/header";

const archivo = Archivo({ 
  subsets: ["latin"],
  variable: '--font-archivo',
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: "Jose Arias | Systems Engineer Portfolio",
  description: "Junior Systems Engineer specializing in Java, Docker, and Web Development. Explore my projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${spaceGrotesk.variable} font-body bg-darkBg text-white antialiased`}>
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  );
}
