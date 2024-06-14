import Link from "next/link";
import { FloatButton } from "antd";
import Title from "antd/lib/typography/Title";
import { PlusOutlined } from "@ant-design/icons";

import { type Locale } from "@shared/i18n";
import { getDictionary } from "@shared/i18n/server";
import ProductsList from "./_containers/ProductsList";

export default async function MyListingsPage({
  params,
}: {
  params: { locale: Locale };
}) {
  const {
    dashboard: { common: dict },
  } = await getDictionary(params.locale);

  return (
    <div data-testid="my_listings_page">
      <Title>{dict.my_listings}</Title>
      <ProductsList />
      <Link href={`/${params.locale}/dashboard/my-listings/add`}>
        <FloatButton
          shape="square"
          type="primary"
          style={{ right: 24 }}
          icon={<PlusOutlined />}
        />
      </Link>
    </div>
  );
}
