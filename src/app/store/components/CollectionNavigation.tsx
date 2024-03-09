import React from "react";
import { Collection } from "@/types/collection.types";
import styles from "./CollectionNav.module.sass";
import CollectionNavLink from "@/app/store/components/CollectionNavLink";
import { ENV } from "@/services/shopify/env";

const CollectionNavigation = async () => {
  const response = await fetch(`${ENV.origin}/api/collections`);
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