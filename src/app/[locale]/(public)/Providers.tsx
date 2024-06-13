"use client";

import { UserProvider } from "@auth0/nextjs-auth0/client";
import { AntdRegistry } from "@ant-design/nextjs-registry";

import ThemeProvider from "./_providers/ThemeProvider";
import QueryProvider from "./_providers/QueryProvider";
import LocaleProvider from "./_providers/LocaleProvider";
import { Locale } from "@/lib/locales";
import { Dictionary } from "@/app/[locale]/(public)/_i18n/types";

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
