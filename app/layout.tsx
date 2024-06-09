import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Lato({ subsets: ["latin"], weight: ["100", "300", "400", "700"], variable: "--font-lato" });

export const metadata: Metadata = {
  title: "Simple Quicks",
  description: "Simple quicks - to do list and messaging",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
