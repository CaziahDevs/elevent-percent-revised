import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="m-0">
      <body className="m-0 min-h-dvh items-center">
        <Header />
        <main className="container  mx-auto overflow-hidden mb-8 min-h-dvh">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
