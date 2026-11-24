import type { Metadata } from "next";
import { Sora, Manrope } from "next/font/google"; 
import "./globals.css";


const sora = Sora({ subsets: ["latin"], variable: "--font-display" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "HyperConnect | Energia inteligente, futuro sustentável",
  description: "Solicite seu orçamento de energia solar diretamente pelo WhatsApp.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${sora.variable} ${manrope.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}