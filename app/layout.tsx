import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mayaramamore.vercel.app"),
  title: {
    default: "Mayara Mamore | Biomedica Esteta em Cuiaba",
    template: "%s | Mayara Mamore",
  },
  description:
    "Landing page da biomédica esteta Mayara Mamoré em Cuiabá, com foco em harmonização facial, botox e preenchimento labial.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
