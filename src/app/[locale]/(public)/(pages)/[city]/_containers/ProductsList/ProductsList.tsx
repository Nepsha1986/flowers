import { Col, Empty, Row } from "antd";

import { productService } from "@public/_services/product.service";
import ProductCard from "@public/_components/ProductCard";

interface Props {
  city: string;
  country: string;
  translations: {
    empty: string;
  };
}

const ProductsList = async ({ city, country, translations }: Props) => {
  const products = await productService.getAll({ city, country });

  if (!products.length) return <Empty description={translations.empty} />;

  return (
    <Row gutter={16} style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
      {products.map((i) => (
        <Col key={i._id} span={8} style={{ marginBottom: "16px" }}>
          <ProductCard
            id={i._id}
            title={i.name}
            description={i.description}
            price={i.price}
            imgSrc={i.images[0]}
          />
        </Col>
      ))}
    </Row>
  );
};

export default ProductsList;
