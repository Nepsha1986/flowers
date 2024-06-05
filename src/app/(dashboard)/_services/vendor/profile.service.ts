import { ProfileReqDto, ProfileResDto } from "@/backend/models/profile.schema";

interface ProfileService {
  add: (data: ProfileReqDto) => Promise<Response>;
  get: () => Promise<ProfileResDto>;
}
const profileService: ProfileService = {
  add: async (data) =>
    await fetch("/api/v1/vendor/profile", {
      method: "post",
      body: JSON.stringify(data),
    }).then((res) => {
      if (!res.ok) throw new Error("Error");
      return res;
    }),
  get: async () =>
    await fetch("/api/v1/vendor/profile").then((data) => data.json()),
};

export { profileService, type ProfileReqDto, type ProfileResDto };
