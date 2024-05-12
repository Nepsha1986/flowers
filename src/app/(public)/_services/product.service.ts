import { z } from "zod";
import { ProductSchema } from "@/backend/models/productSchema";

type ProductDto = z.infer<typeof ProductSchema>;

interface ProductService {
  getAll: () => Promise<ProductDto[]>;
}
const productService: ProductService = {
  getAll: async () =>
    await fetch("http://localhost:3000/api/v1/products").then((data) =>
      data.json(),
    ),
};

export { productService, type ProductDto };
