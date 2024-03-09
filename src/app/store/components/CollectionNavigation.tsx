import React from "react";
import { Collection } from "@/types/collection.types";
import styles from "./CollectionNav.module.sass";
import CollectionNavLink from "@/app/store/components/CollectionNavLink";
import { headers } from "next/headers";
import { BASE_URL_HEADER } from "@/constants/global";

const CollectionNavigation = async () => {
  const pageHeaders = headers();
  const baseUrl = pageHeaders.get(BASE_URL_HEADER);
  const response = await fetch(`${baseUrl}/api/collections`);
  const { collections }: { collections: Collection[] } = await response.json();
  return (
    <ul className={styles.collection_nav}>
      {collections.map((collection: Collection) => {
        return <CollectionNavLink collection={collection} />;
      })}
    </ul>
  );
};
export default CollectionNavigation;