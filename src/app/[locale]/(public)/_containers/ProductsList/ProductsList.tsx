import { Col, Row } from "antd";

import { productService } from "@/app/[locale]/(public)/_services/product.service";
import ProductCard from "@/app/[locale]/(public)/_components/ProductCard";

interface Props {
  city: string;
  country: string;
}

const ProductsList = async ({ city, country }: Props) => {
  const products = await productService.getAll({ city, country });

  return (
    <Row gutter={16} style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
      {products.map((i) => (
        <Col key={i._id} span={8} style={{ marginBottom: "16px" }}>
          <ProductCard
            id={i._id}
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
