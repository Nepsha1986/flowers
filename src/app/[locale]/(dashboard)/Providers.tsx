"use client";

import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AntdRegistry } from "@ant-design/nextjs-registry";

import { LocaleProvider, type Locale, type Dictionary } from "@shared/i18n";

const queryClient = new QueryClient();

const Providers = ({
  children,
  locale,
  dictionary,
}: {
  children: React.ReactNode;
  locale: Locale;
  dictionary: Dictionary;
}) => (
  <LocaleProvider locale={locale} dictionary={dictionary}>
    <AntdRegistry>
      <UserProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </UserProvider>
    </AntdRegistry>
  </LocaleProvider>
);

export default Providers;
