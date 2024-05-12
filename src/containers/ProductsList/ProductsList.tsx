"use client";
import { useEffect, useState } from "react";
import { List } from "antd";

import { ProductDto, productService } from "@/services/vendor/product.service";

const ProductsList = () => {
  const [products, setProducts] = useState<ProductDto[]>([]);
  useEffect(() => {
    productService.getAll().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <List
      bordered
      dataSource={products}
      renderItem={(item) => (
        <List.Item>
          Name: {item.name} ; Description: {item.description}; Price:{" "}
          {item.price}
        </List.Item>
      )}
    />
  );
};

export default ProductsList;
