import { productService } from "@public/_services/product.service";
import { Locale } from "@shared/i18n";
import { getDictionary } from "@shared/i18n/server";

import BackBtn from "./_components/SingleProduct/BackBtn";
import SingleProduct from "./_components/SingleProduct";

type State = 1 | 2 | 3 | 4 | 5;

export default async function SingleProductPage({
  params,
}: {
  params: { id: string; locale: Locale };
}) {
  const dict = await getDictionary(params.locale);
  const data = await productService.get(params.id);
  const { _id, name, description, price, vendorId, images, state, location } =
    data;

  const getStateMessage = (state: State): string => {
    const states = {
      1: dict.pages.single_product_page.bouquet_state.bad,
      2: dict.pages.single_product_page.bouquet_state.average,
      3: dict.pages.single_product_page.bouquet_state.good,
      4: dict.pages.single_product_page.bouquet_state.perfect,
      5: dict.pages.single_product_page.bouquet_state.new,
    };

    return states[state];
  };

  return (
    <div data-testid="single_product_page">
      <BackBtn
        url={`/${params.locale}/${location.city}`}
        text={dict.common.back}
      />
      <SingleProduct
        id={_id}
        imageUrl={images[0]}
        name={name}
        description={description}
        stateMessage={getStateMessage(state as State)}
        price={price}
        vendorId={vendorId}
      />
    </div>
  );
}
