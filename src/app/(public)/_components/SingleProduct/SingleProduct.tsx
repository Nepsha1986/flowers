import Image from "next/image";
import placeholder from "@/assets/temp/buaquete.webp";

import styles from "./styles.module.css";

interface Props {
  id: string;
  name: string;
  description: string;
  price: number;
}

const SingleProduct = ({ id, name, description, price }: Props) => {
  return (
    <div className={styles.singleProduct}>
      <div className={styles.singleProduct__imgWrap}>
        <Image src={placeholder} width={600} height={600} alt={name} />
      </div>

      <div className={styles.singleProduct__dataWrap}>
        <h1>{name}</h1>
        <span>${price}</span>

        <div>
          <p>{description}</p>
        </div>
        <span>Product ID: {id}</span>
      </div>
    </div>
  );
};

export default SingleProduct;
