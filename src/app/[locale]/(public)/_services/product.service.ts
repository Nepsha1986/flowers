import axios from "axios";
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
  getAll: async (params) => {
    const { data } = await axios.get<ProductResDto[]>(
      `${API_URL}/api/v1/products?` + new URLSearchParams(params),
    );
    return data;
  },
  get: async (id) => {
    const { data } = await axios.get(`${API_URL}/api/v1/products/${id}`);
    return data;
  },
};

export { productService, type ProductResDto };
