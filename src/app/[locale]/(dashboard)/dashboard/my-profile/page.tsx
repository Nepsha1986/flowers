"use client";
import { useQuery } from "@tanstack/react-query";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Spin } from "antd";

import {
  ProfileResDto,
  profileService,
} from "@dashboard/_services/vendor/profile.service";
import CreateProfileForm from "./_containers/CreateProfileForm";

export default function Profile() {
  const { user } = useUser();
  const {
    data: profile,
    isLoading,
    refetch,
  } = useQuery<ProfileResDto>({
    queryKey: ["getProfile"],
    queryFn: profileService.get,
  });

  if (isLoading) return <Spin />;

  return (
    <div>
      <h1>Profile</h1>

      <CreateProfileForm
        defaults={{
          firstName: profile?.firstName || user?.name || "",
          secondName: profile?.secondName || "",
          email: profile?.email || user?.email || "",
          phoneNumber: profile?.phoneNumber || "",
        }}
        onSuccess={refetch}
      />
    </div>
  );
}
