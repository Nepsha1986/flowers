import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Montserrat, Pacifico } from "next/font/google";

import { type Locale, locales } from "@shared/i18n";
import Providers from "./Providers";

import "./globals.css";
import { getDictionary } from "@shared/i18n/server/getDictionary";

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

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) {
  const locale = params.locale;
  if (!locales.includes(locale)) notFound();
  const dict = await getDictionary(locale);

  return (
    <html lang={locale}>
      <Providers dictionary={dict} locale={locale}>
        <body className={`${montserrat.variable} ${pacifico.variable}`}>
          {children}
        </body>
      </Providers>
    </html>
  );
}
