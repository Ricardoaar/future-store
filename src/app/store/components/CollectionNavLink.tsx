"use client";
import React from "react";
import { Collection } from "@/types/collection.types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import styles from "./CollectionNav.module.sass";

const CollectionNavLink = ({ collection }: { collection: Collection }) => {
  const path = usePathname();

  return (
    <li className={classNames(styles.collection_link, {
      [styles.selected]: path.includes(collection.handle)
    })}>
      <Link href={`/store/collections/${collection.handle}`}>
        {collection.title}
      </Link>
    </li>
  );
};

export default CollectionNavLink;