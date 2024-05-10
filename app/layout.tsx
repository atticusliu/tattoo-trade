import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./header";
import Footer from "./footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  title: "Tattoo Trade",
  description: "Buy and sell tattoo gear and supplies",
};

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <body>
        <Header />
        <main>{props.children}</main>
        <Footer />
      </body>
    </html>
  );
}
