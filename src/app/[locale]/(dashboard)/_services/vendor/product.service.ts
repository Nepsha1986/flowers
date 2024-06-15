import axios from "axios";
import { ProductResDto, ProductReqDto } from "@/backend/models/product.schema";

interface ProductService {
  getAll: () => Promise<ProductResDto[]>;
  add: (product: ProductReqDto) => Promise<Response>;
}
const productService: ProductService = {
  getAll: async () => {
    const { data } = await axios.get("/api/v1/vendor/products");
    return data;
  },
  add: async (product) => {
    const { data } = await axios.post("/api/v1/vendor/products", product);
    return data;
  },
};

export { productService, type ProductResDto, type ProductReqDto };
