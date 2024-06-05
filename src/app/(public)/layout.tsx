import type { Metadata } from "next";
import { Lato, Dancing_Script } from "next/font/google";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { AntdRegistry } from "@ant-design/nextjs-registry";

import ThemeProvider from "@/app/(public)/ThemeProvider";

import "./globals.css";
import QueryProvider from "@/app/(public)/QueryProvider";

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <UserProvider>
          <QueryProvider>
            <body className={`${lato.variable} ${dancing_script.variable}`}>
              <AntdRegistry>{children}</AntdRegistry>
            </body>
          </QueryProvider>
        </UserProvider>
      </ThemeProvider>
    </html>
  );
}
