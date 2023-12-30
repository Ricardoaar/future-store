import { SHOPIFY_URLS } from "@/services/shopify/urls";
import { ENV } from "@/services/shopify/env";

export const getProducts = async () => {
  return fetch(SHOPIFY_URLS.products.all, {
    headers: new Headers({
      "X-Shopify-Access-Token": ENV.token
    })
  }).then((res) => res.json()).catch((err) => console.error(err));
};

export const getProduct = async (id: string) => {
  return fetch(SHOPIFY_URLS.products.one(id), {
    headers: new Headers({
      "X-Shopify-Access-Token": ENV.token
    })
  }).then((res) => res.json()).catch((err) => console.error(err));
};


export const getFeaturedProducts = async () => {
  return fetch(SHOPIFY_URLS.products.featured, {
    headers: new Headers({
      "X-Shopify-Access-Token": ENV.token
    }),
    cache: "no-cache"
  }).then((res) => res.json()).catch((err) => console.error(err));
};
