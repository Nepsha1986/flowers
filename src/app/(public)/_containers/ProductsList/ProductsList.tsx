import { Col, Row } from "antd";

import { productService } from "@/app/(public)/_services/product.service";
import ProductCard from "@/app/(public)/_components/ProductCard";

const ProductsList = async () => {
  const products = await productService.getAll();

  return (
    <Row gutter={16} style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
      {products.map((i) => (
        <Col key={i._id} span={8}>
          <ProductCard
            title={i.name}
            description={i.description}
            price={i.price}
          />
        </Col>
      ))}
    </Row>
  );
};

export default ProductsList;
