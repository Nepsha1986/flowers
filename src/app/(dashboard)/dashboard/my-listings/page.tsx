import ProductsList from "./_containers/ProductsList";
import { FloatButton } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Link from "next/link";

export default function MyListings() {
  return (
    <div>
      <h1>My Listings</h1>
      <ProductsList />
      <Link href={"/dashboard/my-listings/add"}>
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
