import ProductsList from "@/app/(public)/_containers/ProductsList";
import CitiesLinks from "@/app/(public)/_containers/CitiesLinks";

export default function Home() {
  return (
    <>
      <h1>Send flowers - Online flower delivery</h1>
      <p>
        Welcome to blumenshop.com - THE online flower delivery service for fresh
        flowers and successful surprises. We have a large selection of bouquets
        to surprise your family, friends or colleagues. Our seasonal cut flowers
        are delivered as quickly as possible and therefore offer the best
        quality at the best price.
      </p>
      <p>
        With us, you can send flowers throughout Germany and have them delivered
        on the day of your choice with our flower delivery service. The free
        greeting card or video message makes your flower greeting a personalised
        gift.
      </p>

      <CitiesLinks />
      <ProductsList />
    </>
  );
}
