"use client";

import { useQuery } from "@tanstack/react-query";
import { Spin } from "antd";
import { useUser } from "@auth0/nextjs-auth0/client";

import { ProfileResDto } from "@/backend/models/profile.schema";
import { profileService } from "@dashboard/_services/vendor/profile.service";

import CreateProfileForm from "./CreateProfileForm";

const CreateProfile = () => {
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
    <CreateProfileForm
      defaults={{
        firstName: profile?.firstName || user?.name || "",
        secondName: profile?.secondName || "",
        email: profile?.email || user?.email || "",
        phoneNumber: profile?.phoneNumber || "",
      }}
      onSuccess={refetch}
    />
  );
};

export default CreateProfile;
