import { notFound } from "next/navigation";
import ProductsList from "@/app/(public)/_containers/ProductsList";
import { citiesUrls } from "@/lib/cities";

export default function Flowers(context: { params: { city: string } }) {
  const city = context.params.city;

  if (!citiesUrls.ua.includes(city)) {
    notFound();
  }

  return (
    <>
      <h1>Send Flowers - {city}</h1>
      <ProductsList country="Ukraine" city={city} />
    </>
  );
}
