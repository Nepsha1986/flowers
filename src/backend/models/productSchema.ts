import { z } from "zod";

export const ProductSchema = z.object({
  vendorId: z.string(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
});

export const ProductModel = ProductSchema.extend({ _id: z.string() });
