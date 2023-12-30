import React, { PropsWithChildren } from "react";
import { Divider } from "@/app/components/shared/Divider";
import { DividerSize } from "@/app/components/shared/Divider/Divider.types";
import CollectionNavigation from "@/app/store/components/CollectionNavigation";
import styles from "./store.module.sass";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Divider size={DividerSize.medium}>
        <h1 style={{ fontSize: "2rem" }}>
          Store
        </h1>
      </Divider>
      <nav className={styles.collection_nav_container}>
        <CollectionNavigation />
      </nav>
      {children}
    </>
  );
};

export default Layout;