import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import Header from "./components/Header";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#FFE4C4]">
      <body>
        <main className="container py-4 px-6 mx-auto overflow-hidden">
          <Header />
          {children}
        </main>

      </body>
    </html>
  );
}
