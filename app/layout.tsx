import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bobbita",
  description: "Bobbas Mexicanas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="bg-[#DEB3E0]" lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
