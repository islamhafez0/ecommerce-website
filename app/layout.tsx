import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import ShoppingCartModal from "./components/ShoppingCartModal";
import CartProvider from "./components/providers";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shoppr",
};

const date = new Date().getFullYear();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <main className="h-screen flex flex-col justify-between">
            <div role="main">
              <Navbar />
              {children}
            </div>
            <Footer />
          </main>
          <ShoppingCartModal />
        </CartProvider>
      </body>
    </html>
  );
}
