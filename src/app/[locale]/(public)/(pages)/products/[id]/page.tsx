import { productService } from "@/app/[locale]/(public)/_services/product.service";
import SingleProduct from "@/app/[locale]/(public)/_components/SingleProduct";

export default async function SingleProductPage({
  params,
}: {
  params: { id: string };
}) {
  const data = await productService.get(params.id);
  const { _id, name, description, price, vendorId } = data;

  return (
    <div data-testid="single_product_page">
      <SingleProduct
        id={_id}
        name={name}
        description={description}
        price={price}
        vendorId={vendorId}
      />
    </div>
  );
}
