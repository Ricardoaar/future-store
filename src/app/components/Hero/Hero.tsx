import React from "react";
import styles from "./Hero.module.sass";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <p className={styles.welcome}>
        Future Store is a demo e-commerce site built with Next.js and Shopify.
      </p>
      <div className={styles.imageContainer}>
        <Image fill src={"/images/Hero.png"} alt={"Main image"} />
      </div>
    </section>
  );
};

export default Hero;