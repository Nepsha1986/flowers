import { z } from "zod";

export const ProfileModel = z.object({
  _id: z.string(),
  firstName: z.string().max(100),
  secondName: z.string().max(800),
  email: z.string().email(),
  phoneNumber: z.number(),
  vendorId: z.string(),
});
export const NewProfileValidationSchema = ProfileModel.omit({ _id: true });

const ProfileResSchema = ProfileModel;
const ProfileReqSchema = ProfileModel.omit({ _id: true, vendorId: true });

export type ProfileResDto = z.infer<typeof ProfileResSchema>;
export type ProfileReqDto = z.infer<typeof ProfileReqSchema>;
