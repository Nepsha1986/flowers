import { ProductResDto } from "@/backend/models/product.schema";
import { API_URL } from "@shared/lib/variables";

interface ProductService {
  getAll: (params: {
    city: string;
    country: string;
  }) => Promise<ProductResDto[]>;
  get: (id: string) => Promise<ProductResDto>;
}
const productService: ProductService = {
  getAll: async (params) =>
    await fetch(
      `${API_URL}/api/v1/products?` + new URLSearchParams(params),
    ).then((data) => data.json()),
  get: async (id) =>
    await fetch(`${API_URL}/api/v1/products/${id}`).then((data) => data.json()),
};

export { productService, type ProductResDto };
