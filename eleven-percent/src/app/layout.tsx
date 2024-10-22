import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body>
        <Header />
        <main className="container  mx-auto overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
