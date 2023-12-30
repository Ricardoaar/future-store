import { getCollections } from "@/services/shopify/collections";
import { Collection } from "@/types/collection.types";


export async function GET() {
  const { smart_collections } = await getCollections();
  const mappedCollections = smart_collections.map((collection: Collection) => ({
    id: collection.id,
    title: collection.title,
    handle: collection.handle
  }));
  return Response.json({ collections: mappedCollections });
}