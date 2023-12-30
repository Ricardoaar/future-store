import styles from "@/sass/pages/Home.module.sass";

import { DividerSize } from "@/app/components/shared/Divider/Divider.types";
import { Divider } from "@/app/components/shared/Divider";
import React from "react";
import ProductsRenderer from "@/app/components/Products/ProductsRenderer";
import ProductPresentation from "@/app/components/Products/ProductPresentation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Future World | Home",
  description: "Home page of future world",
  keywords: "Home, page, products, new, featured, best, sellers, best sellers, new products, featured products"
};


export default async function Home() {
  return (
    <main className={styles.layout}>
      <Divider size={DividerSize.medium}>WE HAVE NEW PRODUCTS!</Divider>
      <section className={styles.featured}>
        <ProductsRenderer productComponent={ProductPresentation} />
      </section>
    </main>
  );
}