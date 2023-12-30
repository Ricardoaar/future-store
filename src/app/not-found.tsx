import React from "react";
import Image from "next/image";
import styles from "@/sass/global-error.module.sass";

const NotFound = () => {
  return (
    <div className={styles.error}>
      <Image
        src="/images/NotFound.png"
        alt="Error"
        width={500}
        height={500}
      />
    </div>
  );
};

export default NotFound;