import { Locale } from "@shared/i18n";
import React from "react";

const pages: Record<Locale, () => Promise<React.ComponentType>> = {
  "en-us": () => import("./en-us").then((module) => module.default),
  "ru-ua": () => import("./ru-ua").then((module) => module.default),
  "uk-ua": () => import("./uk-ua").then((module) => module.default),
};
const getPage = async (locale: Locale) => pages[locale]();
export default async function AboutPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const Page = await getPage(params.locale);

  return <Page />;
}
