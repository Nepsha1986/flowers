"use client";
import { useQuery } from "@tanstack/react-query";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Spin } from "antd";
import Title from "antd/lib/typography/Title";

import {
  ProfileResDto,
  profileService,
} from "@dashboard/_services/vendor/profile.service";
import CreateProfileForm from "./_containers/CreateProfileForm";
import { useDictionary } from "@shared/i18n";

export default function Profile() {
  const { user } = useUser();
  const {
    dictionary: {
      dashboard: { common: dict },
    },
  } = useDictionary();

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
    <div data-testid="my_profile_page">
      <Title>{dict.my_profile}</Title>

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
