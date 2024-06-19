import Image from "next/image";
import { Tag } from "antd";
import Title from "antd/lib/typography/Title";
import Paragraph from "antd/lib/typography/Paragraph";
import Text from "antd/lib/typography/Text";

import ContactSeller from "./ContactSeller";

import styles from "./styles.module.css";

interface Props {
  id: string;
  name: string;
  description: string;
  stateMessage: string;
  price: number;
  vendorId: string;
  imageUrl: string;
}

const SingleProduct = ({
  id,
  name,
  description,
  price,
  stateMessage,
  vendorId,
  imageUrl,
}: Props) => {
  return (
    <div className={styles.singleProduct}>
      <div className={styles.__imgWrap}>
        <Image src={imageUrl} width={600} height={600} alt={name} />
      </div>

      <div className={styles.__dataWrap}>
        <div>
          <Tag color="blue">ID: {id}</Tag>

          <Title>{name}</Title>
          <Text className={styles.__price}>${price}</Text>
          <Paragraph style={{ fontSize: "1rem" }}>{description}</Paragraph>
          <Paragraph style={{ fontSize: "1rem" }}>{stateMessage}</Paragraph>
        </div>

        <ContactSeller id={vendorId} />
      </div>
    </div>
  );
};

export default SingleProduct;
