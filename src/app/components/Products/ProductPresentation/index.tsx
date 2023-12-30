import React from "react";
import { Product } from "@/app/components/Products/Products.types";
import styles from "./ProductPresentation.module.sass";
import Image from "next/image";
import classNames from "classnames";

const ProductPresentation = ({ product }: { product: Product }) => {
  return (
    <article className={styles.productWrapper}>
      <div className={styles.imageWrapper}>
        <Image alt={product.title} src={product.image} fill />
      </div>
      <span className={classNames(styles.status, {
        [styles.available]: product.status === "active",
        [styles.unavailable]: product.status !== "active"
      })}>{
        product.status
      }</span>
    </article>


  );
};

export default ProductPresentation;