import { useContext } from "react";
import { LocaleContext } from "./LocaleProvider";

export const useDictionary = () => {
  const { dictionary, locale } = useContext(LocaleContext);

  return {
    dictionary,
    locale,
  };
};
