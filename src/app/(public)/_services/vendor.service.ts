import { ProfileResDto } from "@/backend/models/profile.schema";

interface VendorService {
  get: (id: string) => Promise<ProfileResDto>;
}
const vendorService: VendorService = {
  get: async (id: string) =>
    await fetch(`/api/v1/vendors/${id}`).then((data) => data.json()),
};

export { vendorService, type ProfileResDto };
