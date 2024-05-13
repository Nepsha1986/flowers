import { z } from "zod";

import { ProductModel } from "@/backend/models/productSchema";
import { API_URL } from "@/variables";

type ProductReqDto = z.infer<typeof ProductModel>;

interface ProductService {
  getAll: () => Promise<ProductReqDto[]>;
}
const productService: ProductService = {
  getAll: async () =>
    await fetch(`${API_URL}/api/v1/products`).then((data) => data.json()),
};

export { productService, type ProductReqDto };
