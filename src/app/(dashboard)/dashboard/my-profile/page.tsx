"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import CreateProfileForm from "./_containers/CreateProfileForm";

export default function Profile() {
  const { user } = useUser();
  return (
    <div>
      <h1>Profile</h1>

      <CreateProfileForm />
    </div>
  );
}
