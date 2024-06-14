import React, { createContext, useContext } from "react";

import { Locale } from "@/lib/locales";
import { Dictionary } from "@/app/[locale]/(public)/_i18n/types";

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

export const useDictionary = () => {
  const { dictionary, locale } = useContext(LocaleContext);

  return {
    dictionary,
    locale,
  };
};

export default LocaleProvider;
