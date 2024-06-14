"use client";
import React, { createContext } from "react";

import { type Dictionary, type Locale } from "./types";

interface ILocaleContext {
  locale: Locale;
  dictionary: Dictionary;
}
export const LocaleContext = createContext<ILocaleContext>(
  {} as ILocaleContext,
);

const LocaleProvider = ({
  children,
  dictionary,
  locale,
}: {
  children: React.ReactNode;
  dictionary: Dictionary;
  locale: Locale;
}) => {
  return (
    <LocaleContext.Provider
      value={{
        locale,
        dictionary,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
};

export default LocaleProvider;
