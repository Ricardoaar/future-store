"use client";
import React from "react";
import Link from "next/link";
import styles from "@/sass/components/Navbar.module.sass";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import ShoppingCart from "../../ShoppingCart/ShoppingCart";

const Navigation = [
  {
    name: "Home",
    link: "/"
  },
  {
    name: "Store",
    link: "/store"
  },
  {
    name: "LogIn",
    link: "/login",
    condition: ({ token }: { token?: string }) => {
      return !token;
    }
  }
];

export const NavBar = ({ token, user }: {
  token?: string, user?: {
    firstName: string,
    email: string
  }
}) => {
  const path = usePathname();
  let [, pageSection] = path.split("/");
  if (pageSection === "") pageSection = "home";

  return (
    <ul className={styles.navbar}>
      {Navigation.map((nav) => {
        if (nav.condition && !nav.condition({ token })) return null;

        const isSelected = pageSection === nav.name.toLowerCase();
        const linkClassName = classNames(styles.navLink, {
          [styles.selected]: isSelected
        });


        return (
          <li key={nav.name} className={styles["nav-item"]}>
            <Link className={linkClassName}
                  href={nav.link}>
              {nav.name}
            </Link>
          </li>
        );
      })}

      {user &&
        <>
          <li>
            <Link className={styles.navLink} href={"/"}>
              <p>Hello {user.firstName}</p>
            </Link>
          </li>
          <li>
            <a className={styles.navLink} href={"/"}
               onClick={() => document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"}>
              <p>Log Out</p>
            </a>
          </li>
          <ShoppingCart />
        </>
      }
    </ul>
  );
};
