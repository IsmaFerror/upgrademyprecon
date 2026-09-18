import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Cargamos la fuente Inter, estándar en interfaces modernas y limpias
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PreconSurgeon | MTG Commander Upgrades",
  description: "Mejora tus mazos preconstruidos de Magic: The Gathering de forma visual y al mejor precio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-[#0a0c10] text-gray-200 antialiased selection:bg-blue-500/30`}>
        {children}
      </body>
    </html>
  );
}