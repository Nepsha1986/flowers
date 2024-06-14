import { notFound } from "next/navigation";

import ProductsList from "@/app/[locale]/(public)/_containers/ProductsList";
import Section from "@/app/[locale]/(public)/_components/Section";
import { getCityCodes, cities } from "@shared/lib/cities";
import { Locale } from "@shared/i18n/locales";

export default function Flowers(context: {
  params: { city: string; locale: Locale };
}) {
  const { city, locale } = context.params;
  const cityCodes = getCityCodes(locale);

  if (!cityCodes.includes(city)) notFound();

  return (
    <Section
      heading={`Courier Delivery of Flowers in ${cities[locale][city]}`}
      subheading="Explore our collection of the freshest and most beautiful flowers that will enhance the important moments of
				your life. Our team of florists is ready to craft unique bouquets delivered right to your doorstep in any corner
				of Kyiv. Order flowers now and gift beauty and joy to your loved ones!"
    >
      <ProductsList country="Ukraine" city={city} />
    </Section>
  );
}
