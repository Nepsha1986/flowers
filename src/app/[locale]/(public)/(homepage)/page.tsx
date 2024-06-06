import HomepageIntro from "./_containers/HomepageIntro";
import { getDictionary } from "@/app/[locale]/(public)/_i18n/getDictionary";
import { Locale } from "@/lib/locales";

export default async function Home({params: { locale }}: { params: { locale: Locale } }) {
  const dict = await getDictionary(locale);
  const { title, sup_title, description } = dict.components.homepage_intro;

  return <HomepageIntro title={title} supTitle={sup_title} description={description} />;
}
