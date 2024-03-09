export const ENV = {
  hostname: process.env.SHOPIFY_HOSTNAME || "",
  token: process.env.SHOPIFY_API_KEY || "",
  cacheToken: process.env.CACHE_TOKEN || null,
  shopifyStorefrontPrivateToken: process.env.SHOPIFY_STOREFRONT_PRIVATE_TOKEN || "",
  shopifyGraphqlEndpoint: process.env.SHOPIFY_GRAPHQL_ENDPOINT || "",
  origin: process.env.ORIGIN || "localhost:3000"
};