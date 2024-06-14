"use client";
import { forwardRef, useContext } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.css";
import { useDictionary } from "@shared/i18n";

interface Props extends React.ComponentPropsWithoutRef<"div"> {
  id: string;
  title: string;
  description: string;
  price: number;
  imgSrc: string;
}

const ProductCard = forwardRef<React.RefObject<"div">, Props>(
  ({ id, title, description, price, imgSrc }: Props, ref) => {
    const { locale } = useDictionary();

    return (
      <Link
        href={`/${locale}/products/${id}`}
        data-testid="product_card"
        className={styles.productCard}
      >
        <div className={styles.productCard__image}>
          <Image src={imgSrc} alt={title} width={400} height={400} />
        </div>

        <div className={styles.productCard__content}>
          <span className={styles.productCard__date}>${price}</span>

          <h2 className={styles.productCard__title}>{title}</h2>

          <p className={styles.productCard__desc}>{description}</p>
        </div>
      </Link>
    );
  },
);

ProductCard.displayName = "ProductCard";

export default ProductCard;
