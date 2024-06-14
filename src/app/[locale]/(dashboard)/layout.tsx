import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { type Locale, locales } from "@shared/i18n";
import { getDictionary } from "@shared/i18n/server/getDictionary";

import Providers from "./Providers";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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

  console.log(dict);

  return (
    <html lang="en">
      <Providers dictionary={dict} locale={locale}>
        <body className={inter.className}>{children}</body>
      </Providers>
    </html>
  );
}
