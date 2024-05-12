import { productService } from "@/app/(public)/_services/product.service";

const ProductsList = async () => {
  const products = await productService.getAll();

  return (
    <div>
      {products.map((i, index) => {
        return (
          <div key={index}>
            <span>{i.name}</span>
            <span>{i.description}</span>
            <span>{i.price}</span>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsList;
