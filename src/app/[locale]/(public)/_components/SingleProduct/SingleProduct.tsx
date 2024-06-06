import Image from "next/image";
import placeholder from "@/assets/temp/buaquete.webp";

import ContactSeller from "./ContactSeller";

import styles from "./styles.module.css";

interface Props {
  id: string;
  name: string;
  description: string;
  price: number;
  vendorId: string;
}

const SingleProduct = ({ id, name, description, price, vendorId }: Props) => {
  return (
    <div className={styles.singleProduct}>
      <div className={styles.singleProduct__imgWrap}>
        <Image src={placeholder} width={600} height={600} alt={name} />
      </div>

      <div className={styles.singleProduct__dataWrap}>
        <div>
          <h1>{name}</h1>
          <span>${price}</span>

          <div>
            <p>{description}</p>
          </div>
          <div>Product ID: {id}</div>
        </div>

        <ContactSeller id={vendorId} />
      </div>
    </div>
  );
};

export default SingleProduct;