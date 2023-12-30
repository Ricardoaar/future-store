"use client";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./ShoppingCart.module.sass";
import { useShoppingCart } from "@/app/components/ShoppingCart/useShoppingCart";

const ShoppingCart = () => {
  const state = useShoppingCart();


  return (
    <div className={styles.shopping_cart__container}>
      <FaShoppingCart className={styles.shopping_cart__icon} />
      <span className={styles.shopping_cart__counter}>{state.cart.length}</span>
    </div>
  );
};

export default ShoppingCart;