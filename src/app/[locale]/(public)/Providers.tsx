"use client";

import { UserProvider } from "@auth0/nextjs-auth0/client";
import { AntdRegistry } from "@ant-design/nextjs-registry";

import ThemeProvider from "./_providers/ThemeProvider";
import QueryProvider from "./_providers/QueryProvider";
import { LocaleProvider, type Dictionary, type Locale } from "@shared/i18n";

const Providers = ({
  children,
  dictionary,
  locale,
}: {
  children: React.ReactNode;
  dictionary: Dictionary;
  locale: Locale;
}) => {
  return (
    <LocaleProvider locale={locale} dictionary={dictionary}>
      <AntdRegistry>
        <ThemeProvider>
          <UserProvider>
            <QueryProvider>{children}</QueryProvider>
          </UserProvider>
        </ThemeProvider>
      </AntdRegistry>
    </LocaleProvider>
  );
};

export default Providers;
