"use client";
import React, { useMemo } from "react";
import { Product } from "@/app/components/Products/Products.types";
import styles from "./ProductView.module.sass";
import Image from "next/image";
import { SanitizeHtml } from "@/app/components/shared/Sanitize";
import { useShoppingCart } from "@/app/components/ShoppingCart/useShoppingCart";

const ProductView = ({ product }: { product?: Product }) => {
  const store = useShoppingCart();
  if (!product) return null;

  return (
    <section className={styles.product__container}>
      <div>
        <div className={styles.image__container}>
          <Image alt={`${product.title} image`} src={product.image} fill />
        </div>
      </div>
      <article className={styles.product_info}>
        <h1 className={styles.title}>{product.title}</h1>
        <div className={styles.product__tags_container}>
          <span className={styles.product__tags_info}>{product.tags}</span>
        </div>

        <SanitizeHtml tag={"p"} className={styles.description}>
          {product.body_html}
        </SanitizeHtml>
        <button className={styles.add_to_cart_button}
                onClick={() => store.addToCart({ title: product.title, quantity: 1, id: product.id, price: 10 })}>
          Add to cart
        </button>
      </article>
    </section>
  );
};

export default ProductView;