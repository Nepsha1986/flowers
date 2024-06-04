import { z } from "zod";

export const ProductModel = z.object({
  _id: z.string(),
  name: z.string().max(100),
  description: z.string().max(800),
  price: z.number().max(20000).min(0),
  vendorId: z.string(),
  location: z.object({
    country: z.string(),
    city: z.string(),
  }),
});
export const NewProductValidationSchema = ProductModel.omit({ _id: true });

const ProductResSchema = ProductModel;
const ProductReqSchema = ProductModel.omit({ _id: true, vendorId: true });

export type ProductResDto = z.infer<typeof ProductResSchema>;
export type ProductReqDto = z.infer<typeof ProductReqSchema>;
