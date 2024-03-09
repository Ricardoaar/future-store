import React, { ReactNode } from "react";
import { Product } from "@/app/components/Products/Products.types";
import { headers } from "next/headers";
import { BASE_URL_HEADER } from "@/constants/global";

const ProductsRenderer = async ({ productComponent: ProductComponent, products, productWrapper: ProductWrapper }: {
  products?: Product[];
  productComponent: React.FC<{ product: Product }>
  productProps?: any;
  productWrapper?: React.FC<{ children?: ReactNode | ReactNode[], product: Product }>
}) => {
  if (!products) {
    const pageHeaders = headers();
    const baseUrl = pageHeaders.get(BASE_URL_HEADER);
    const response = await fetch(`${baseUrl}/api`, {
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