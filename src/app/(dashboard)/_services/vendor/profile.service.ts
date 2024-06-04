import { ProfileReqDto } from "@/backend/models/profile.schema";

interface ProfileService {
  add: (data: ProfileReqDto) => Promise<Response>;
}
const profileService: ProfileService = {
  add: async (data) =>
    await fetch("/api/v1/vendor/profile", {
      method: "post",
      body: JSON.stringify(data),
    }),
};

export { profileService, type ProfileReqDto };
