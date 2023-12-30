"use client";
import React from "react";
import Image from "next/image";
import styles from "@/sass/global-error.module.sass";

const GlobalError = () => {
  return (
    <main className={styles.error}>
      <Image
        src="/images/error.png"
        alt="Error"
        width={500}
        height={500}
      />
      <h1>Oops! Something went wrong.</h1>
    </main>
  );
};

export default GlobalError;