import React from "react";
import { getProduct } from "@/services/shopify/products";
import { Product } from "@/app/components/Products/Products.types";
import { redirect } from "next/navigation";
import { ProductView } from "@/app/components/Products/ProductView";
import { Metadata } from "next";


export async function generateMetadata({ searchParams: { id } }: PageProps): Promise<Metadata> {
  const products = await getProduct(id);


  return {
    title: `Future World | ${products.product.title}`,
    description: products.product.description,
    keywords: products.product.tags,
    openGraph: {
      title: `${products.product.title} | Future World`,
      description: products.product.description,
      images: [
        {
          url: products.product.images[0].src,
          width: products.product.images[0].width,
          height: products.product.images[0].height,
          alt: products.product.images[0].altText
        }
      ]
    }
  };
}

interface PageProps {
  searchParams: {
    id: string;
  };
  params: {
    handle: string;

  };
}

const ProductPage = async ({ searchParams: { id }, params: { handle } }: PageProps) => {
  const { product }: { product: Product } = await getProduct(id);
  if (!id) {
    console.error("You must provide a product id");
    redirect("/store");
  }

  return (
    <ProductView product={product} />
  );
};

export default ProductPage;