import type { Metadata } from "next";
import { Anton, Baloo_2, Bowlby_One, Caveat, Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-shout",
});

const bowlby = Bowlby_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-brand",
});

const caveat = Caveat({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-script",
});

const baloo = Baloo_2({
  weight: ["600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-display",
});

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Big Tomy's — American. Mexican. Charbroiled Burgers.",
  description:
    "Big Tomy's is a West Los Angeles landmark on the corner of Pico and Sawtelle, serving charbroiled burgers, Mexican favorites, breakfast and more since day one.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${bowlby.variable} ${caveat.variable} ${baloo.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
