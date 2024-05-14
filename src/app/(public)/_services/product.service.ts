import { ProductResDto } from "@/backend/models/productSchema";
import { API_URL } from "@/lib/variables";

interface ProductService {
  getAll: () => Promise<ProductResDto[]>;
  get: (id: string) => Promise<ProductResDto>;
}
const productService: ProductService = {
  getAll: async () =>
    await fetch(`${API_URL}/api/v1/products`).then((data) => data.json()),
  get: async (id) =>
    await fetch(`${API_URL}/api/v1/products/${id}`).then((data) => data.json()),
};

export { productService, type ProductResDto };
