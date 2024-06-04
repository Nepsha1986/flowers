import { ProductResDto, ProductReqDto } from "@/backend/models/product.schema";

interface ProductService {
  getAll: () => Promise<ProductResDto[]>;
  add: (product: ProductReqDto) => Promise<Response>;
}
const productService: ProductService = {
  getAll: async () =>
    await fetch("/api/v1/vendor/products").then((data) => data.json()),
  add: async (product) =>
    await fetch("/api/v1/vendor/products", {
      method: "post",
      body: JSON.stringify(product),
    }),
};

export { productService, type ProductResDto, type ProductReqDto };
