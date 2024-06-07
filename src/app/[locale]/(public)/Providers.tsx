"use client";

import { createContext } from "react";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import ThemeProvider from "./_providers/ThemeProvider";
import QueryProvider from "./_providers/QueryProvider";
import { Locale } from "@/lib/locales";

export const LocaleContext = createContext<Locale>("en-us");

const Providers = ({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: Locale;
}) => {
  return (
    <LocaleContext.Provider value={locale}>
      <AntdRegistry>
        <ThemeProvider>
          <UserProvider>
            <QueryProvider>{children}</QueryProvider>
          </UserProvider>
        </ThemeProvider>
      </AntdRegistry>
    </LocaleContext.Provider>
  );
};

export default Providers;
