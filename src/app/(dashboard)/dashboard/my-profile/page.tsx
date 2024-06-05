"use client";
import { useQuery } from "@tanstack/react-query";
import { Spin } from "antd";

import {
  ProfileResDto,
  profileService,
} from "@/app/(dashboard)/_services/vendor/profile.service";
import CreateProfileForm from "@/app/(dashboard)/dashboard/my-profile/_containers/CreateProfileForm";
import { useUser } from "@auth0/nextjs-auth0/client";

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