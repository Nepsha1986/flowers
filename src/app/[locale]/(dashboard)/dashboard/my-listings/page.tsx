import { FloatButton } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Link from "next/link";

import ProductsList from "./_containers/ProductsList";
import { Locale } from "@shared/i18n/locales";

export default function MyListings({ params }: { params: { locale: Locale } }) {
  return (
    <div>
      <h1>My Listings</h1>
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
