import HomepageIntro from "./_containers/HomepageIntro";
import { Locale } from "@shared/i18n";
import { getDictionary } from "@shared/i18n/server";

export default async function Home({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const dict = await getDictionary(locale);
  const { title, sup_title, description } = dict.components.homepage_intro;

  return (
    <HomepageIntro
      title={title}
      supTitle={sup_title}
      description={description}
    />
  );
}
