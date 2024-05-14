import { notFound } from "next/navigation";
import ProductsList from "@/app/(public)/_containers/ProductsList";
import { cities } from "@/lib/cities";

export default function Flowers(context: { params: { city: string } }) {
  const city = context.params.city;

  // @ts-ignore
  if (!cities.ua.includes(city)) {
    notFound();
  }

  return (
    <>
      <h1>Send Flowers - {city}</h1>
      <ProductsList />
    </>
  );
}
