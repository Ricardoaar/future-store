import React, { PropsWithChildren, ReactNode } from "react";
import { Product } from "@/app/components/Products/Products.types";
import { ENV } from "@/services/shopify/env";

const ProductsRenderer = async ({ productComponent: ProductComponent, products, productWrapper: ProductWrapper }: {
  products?: Product[];
  productComponent: React.FC<{ product: Product }>
  productProps?: any;
  productWrapper?: React.FC<{ children?: ReactNode | ReactNode[], product: Product }>
}) => {
  if (!products) {
    const response = await fetch(`${ENV.origin}/api`, {
      cache: "force-cache",
      next: {
        tags: ["featured"]
      }
    });
    const res = await response.json();
    products = res.products || [];
  }

  if (ProductWrapper) {
    return (
      <>
        {products?.map((product: Product) => <ProductWrapper product={product}>
          <ProductComponent key={product.id} product={product} />
        </ProductWrapper>)}
      </>);
  }


  return (
    <>
      {products?.map((product: Product) => (<ProductComponent key={product.id} product={product} />))}
    </>
  );
};

export default ProductsRenderer;