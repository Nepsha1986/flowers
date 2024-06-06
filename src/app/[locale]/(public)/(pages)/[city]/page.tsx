import { notFound } from "next/navigation";

import ProductsList from "@/app/[locale]/(public)/_containers/ProductsList";
import Section from "@/app/[locale]/(public)/_components/Section";
import { citiesUrls } from "@/lib/cities";

export default function Flowers(context: { params: { city: string } }) {
  const city = context.params.city;

  if (!citiesUrls.ua.includes(city)) {
    notFound();
  }

  return (
    <Section
      heading={`Courier Delivery of Flowers in ${city}`}
      subheading="Explore our collection of the freshest and most beautiful flowers that will enhance the important moments of
				your life. Our team of florists is ready to craft unique bouquets delivered right to your doorstep in any corner
				of Kyiv. Order flowers now and gift beauty and joy to your loved ones!"
    >
      <ProductsList country="Ukraine" city={city} />
    </Section>
  );
}
