import { z } from "zod";

import { ProductModel } from "@/backend/models/productSchema";
import { API_URL } from "@/lib/variables";

type ProductReqDto = z.infer<typeof ProductModel>;

interface ProductService {
  getAll: () => Promise<ProductReqDto[]>;
  get: (id: string) => Promise<ProductReqDto>;
}
const productService: ProductService = {
  getAll: async () =>
    await fetch(`${API_URL}/api/v1/products`).then((data) => data.json()),
  get: async (id) =>
    await fetch(`${API_URL}/api/v1/products/${id}`).then((data) => data.json()),
};

export { productService, type ProductReqDto };
