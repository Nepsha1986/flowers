import type { Metadata } from "next";
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
  if (!locales.includes(params.locale)) {
    return <html lang="en">404 not found</html>;
  }

  return (
    <html lang="en">
      <Providers locale={params.locale}>
        <body className={`${montserrat.variable} ${pacifico.variable}`}>
          {children}
        </body>
      </Providers>
    </html>
  );
}
