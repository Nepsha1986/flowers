import "server-only";

import { type Locale } from "../types";

const dictionaries = {
  "en-us": () =>
    import("../dictionaries/en-us.json").then((module) => module.default),
  "ru-ua": () =>
    import("../dictionaries/ru-ua.json").then((module) => module.default),
  "uk-ua": () =>
    import("../dictionaries/uk-ua.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
