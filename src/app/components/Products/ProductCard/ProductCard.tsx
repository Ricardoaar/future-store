"use client";
import React from "react";
import { Product } from "@/app/components/Products/Products.types";
import Image from "next/image";
import styles from "./ProductCard.module.sass";

interface ProductCardProps {
  product: Product;
  onClickProduct?: (event: React.MouseEvent<HTMLElement>, product: Product) => void;

}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClickProduct }) => {
  return (
    <article className={styles.productCard} onClick={(event) => onClickProduct?.(event, product)}>
      <div className={styles.contentWrapper}>
        <div className={styles.imageContainer}>
          <Image
            src={product.image.src}
            alt={product.image.alt ?? "Product image"}
            fill
            className={styles.image}
          />
        </div>
        {product.variants?.length > 1 && <div className={styles.priceContainer}>
          <span className={styles.price}>{product.variants[0].price}</span>
        </div>}

      </div>
      <h4 title={product.title} className={styles.title}>{product.title}</h4>
      <p className={styles.tag}>{product.tags}</p>
    </article>
  );
};

export default ProductCard;