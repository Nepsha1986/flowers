import Title from "antd/lib/typography/Title";
import { getDictionary } from "@shared/i18n/server";
import CreateProfile from "@dashboard/dashboard/my-profile/_containers/CreateProfile";
import { Locale } from "@shared/i18n";

export default async function Profile({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const {
    dashboard: {
      common: { my_profile },
    },
  } = await getDictionary(locale);

  return (
    <div data-testid="my_profile_page">
      <Title>{my_profile}</Title>

      <CreateProfile />
    </div>
  );
}
