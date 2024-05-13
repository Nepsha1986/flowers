import { forwardRef } from "react";
import Image from "next/image";
import img from "@/assets/temp/buaquete.webp";

import styles from "./styles.module.css";

interface Props extends React.ComponentPropsWithoutRef<"div"> {
  title: string;
  description: string;
  price: number;
}

const ProductCard = forwardRef<React.RefObject<"div">, Props>(
  ({ title, description, price }: Props, ref) => {
    return (
      <a
        href={"/placeholder"}
        data-testid="product_card"
        className={styles.productCard}
      >
        <div className={styles.productCard__image}>
          <Image src={img.src} alt={title} width={400} height={400} />
        </div>

        <div className={styles.productCard__content}>
          <span className={styles.productCard__date}>${price}</span>

          <h2 className={styles.productCard__title}>{title}</h2>

          <p className={styles.productCard__desc}>{description}</p>
        </div>
      </a>
    );
  },
);

ProductCard.displayName = "ProductCard";

export default ProductCard;
