import { getFeaturedProducts } from "@/services/shopify/products";

export async function GET() {
  const { products } = await getFeaturedProducts();
  return Response.json({ products });
}