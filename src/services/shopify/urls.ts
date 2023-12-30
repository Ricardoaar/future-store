import { ENV } from "@/services/shopify/env";

export const SHOPIFY_URLS = {
  products: {
    all: ENV.hostname + "/api/2023-10/products.json",
    one: (productId: string) => ENV.hostname + `/api/2023-10/products/${productId}.json`,
    featured: ENV.hostname + "/api/2023-10/collections/414525063423/products.json"
  }, collections: {
    all: ENV.hostname + "/api/2023-10/smart_collections.json",
    one: (collectionId: number) => ENV.hostname + `/api/2023-10/smart_collections/${collectionId}.json`,
    products: (collectionId: number) => ENV.hostname + `/api/2023-10/collections/${collectionId}/products.json`
  }
};