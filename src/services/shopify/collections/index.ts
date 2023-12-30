import { SHOPIFY_URLS } from "@/services/shopify/urls";
import { ENV } from "@/services/shopify/env";

export const getCollections = async () => {
  return fetch(SHOPIFY_URLS.collections.all, {
    headers: new Headers({
      "X-Shopify-Access-Token": ENV.token
    })
  }).then((res) => res.json()).catch((err) => console.error(err));
};


export const getCollectionProducts = async (collectionId: number) => {
  return fetch(SHOPIFY_URLS.collections.products(collectionId), {
    headers: new Headers({
      "X-Shopify-Access-Token": ENV.token
    })
  }).then((res) => res.json()).catch((err) => console.error(err));
};

export const getCollection = async (collectionId: number) => {
  return fetch(SHOPIFY_URLS.collections.one(collectionId), {
    headers: new Headers({
      "X-Shopify-Access-Token": ENV.token
    })
  }).then((res) => res.json()).catch((err) => console.error(err));
};