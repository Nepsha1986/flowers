"use client";
import { useEffect, useState } from "react";
import { List } from "antd";

import {
  ProductResDto,
  productService,
} from "@/app/[locale]/(dashboard)/_services/vendor/product.service";

const ProductsList = () => {
  const [products, setProducts] = useState<ProductResDto[]>([]);
  useEffect(() => {
    productService.getAll().then(setProducts);
  }, []);

  return (
    <div
      style={{ maxHeight: "clamp(400px, 60dvh, 60dvh)", overflow: "scroll" }}
    >
      <List
        bordered
        dataSource={products}
        renderItem={(item) => (
          <List.Item
            actions={[
              <a key="list-loadmore-edit">edit</a>,
              <a key="list-loadmore-more">more</a>,
            ]}
          >
            <List.Item.Meta
              title={`${item.name} - $${item.price}`}
              description={item.description}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default ProductsList;
