import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Montserrat, Pacifico } from "next/font/google";

import { type Locale, locales } from "@/lib/locales";
import Providers from "./Providers";

import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-main",
  weight: ["300", "400", "700"],
});

const pacifico = Pacifico({
  variable: "--font-alt",
  weight: ["400"],
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "-",
  description: "-",
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) {
  const locale = params.locale;
  if (!locales.includes(locale)) notFound();

  return (
    <html lang={locale}>
      <Providers locale={locale}>
        <body className={`${montserrat.variable} ${pacifico.variable}`}>
          {children}
        </body>
      </Providers>
    </html>
  );
}
