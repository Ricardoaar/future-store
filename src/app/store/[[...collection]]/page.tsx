import React, { PropsWithChildren } from "react";
import { Collection } from "@/types/collection.types";
import { getCollectionProducts } from "@/services/shopify/collections";
import styles from "@/app/store/store.module.sass";
import ProductsRenderer from "@/app/components/Products/ProductsRenderer";
import ProductCard from "@/app/components/Products/ProductCard/ProductCard";
import { Product } from "@/app/components/Products/Products.types";
import Link from "next/link";
import { headers } from "next/headers";
import { BASE_URL_HEADER } from "@/constants/global";

interface PageProps {
  params: {
    collection: string[];
  };
}

const Wrapper = ({ product, children }: PropsWithChildren<{ product: Product }>) => {

  return <Link href={`/product/${product.title}?id=${product.id}`}>
    {children}
  </Link>;

};


const Page: React.FC<PageProps> = async ({ params: { collection = [] } }) => {
  let products;
  if (collection[1]) {
    const pageHeaders = headers();
    const baseUrl = pageHeaders.get(BASE_URL_HEADER);
    const all = await fetch(`${baseUrl}/api/collections`);
    const { collections } = await all.json();
    const id = collections.find((currentCollection: Collection) => currentCollection.handle === collection?.[1])?.id;
    const res = await getCollectionProducts(id);
    products = res.products;
  }

  return (
    <section className={styles.productsWrapper}>
      <ProductsRenderer productComponent={ProductCard} products={products} productWrapper={Wrapper} />
    </section>
  );
};

export default Page;