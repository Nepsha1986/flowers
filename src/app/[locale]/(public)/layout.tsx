import type { Metadata } from "next";
import { Lato, Dancing_Script } from "next/font/google";

import { type Locale, locales } from "@/lib/locales";
import Providers from "./Providers";

import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-main",
  weight: ["300", "400", "700"],
});

const dancing_script = Dancing_Script({
  variable: "--font-alt",
  weight: ["400"],
  subsets: ["latin"],
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
        <body className={`${lato.variable} ${dancing_script.variable}`}>
          {children}
        </body>
      </Providers>
    </html>
  );
}
