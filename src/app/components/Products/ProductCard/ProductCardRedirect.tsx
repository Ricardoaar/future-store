"use client";
import { Product } from "@/app/components/Products/Products.types";
import React from "react";
import { useRouter } from "next/navigation";
import ProductCard from "@/app/components/Products/ProductCard/ProductCard";

const ProductCardWrapper = ({ product }: { product: Product }) => {
  const router = useRouter();
  const onClickProduct = (event: React.MouseEvent<HTMLElement>, product: any) => {
    event.preventDefault();
    router.push(`/product/${product.handle}?id=${product.id}`);
  };

  return <ProductCard product={product} onClickProduct={onClickProduct} />;
};

export default ProductCardWrapper;