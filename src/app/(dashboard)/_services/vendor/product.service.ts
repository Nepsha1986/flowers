import { z } from "zod";
import { ProductSchema } from "@/backend/models/productSchema";

type ProductDto = z.infer<typeof ProductSchema>;

interface ProductService {
  getAll: () => Promise<ProductDto[]>;
  add: (product: ProductDto) => Promise<Response>;
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

export { productService, type ProductDto };
