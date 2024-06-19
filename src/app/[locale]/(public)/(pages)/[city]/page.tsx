import { notFound } from "next/navigation";

import ProductsList from "./_containers/ProductsList";
import Section from "@public/_components/Section";
import { getCityCodes, cities } from "@shared/lib/cities";
import { Locale, t } from "@shared/i18n";
import { getDictionary } from "@shared/i18n/server";

export default async function Flowers(context: {
  params: { city: string; locale: Locale };
}) {
  const { city, locale } = context.params;
  const dictionary = await getDictionary(locale);

  const { heading, sub_heading } = dictionary.pages.city;

  const cityCodes = getCityCodes(locale);

  if (!cityCodes.includes(city)) notFound();

  return (
    <Section
      heading={t(heading, cities[locale][city])}
      subheading={t(sub_heading, cities[locale][city])}
    >
      <ProductsList
        country="Ukraine"
        city={city}
        translations={{ empty: dictionary.common.empty_listings_info }}
      />
    </Section>
  );
}
