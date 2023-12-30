"use client";
import React, { useState } from "react";
import styles from "./NewAccountForm.module.sass";
import Link from "next/link";
import { createUser, requestToken } from "@/actions";
import { useRouter } from "next/navigation";

const NewAccountForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData: FormData = new FormData(event.target as HTMLFormElement);

    if (formData.get("password") !== formData.get("confirmPassword")) {
      setError("Passwords do not match");
      return;
    }


    setLoading(true);

    createUser(formData).then(() => {
      requestToken(formData.get("email") as string, formData.get("password") as string).then((t) => {
        router.push("/store");
      });
    }).finally(() => {
      setLoading(false);
    });
  };

  return (
    <section className={styles.formContainer}>
      <h1 className={styles.title}> Create account </h1>
      <form onSubmit={onSubmit}>
        <input type="text" name="firstName" placeholder="First Name" disabled={loading} />
        <input type="text" name="lastName" placeholder="Last Name" disabled={loading} />
        <input type="email" autoComplete={"email"} name="email" placeholder="Email" disabled={loading} />
        <input type="password" name="password" placeholder="Password" disabled={loading} />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" disabled={loading}
        />
        <input type="submit" value="Submit" disabled={loading} />
      </form>
      <p>Already have an account? <Link href={"/login"}> Log in!</Link></p>
      {error && <p>{error}</p>}
    </section>
  );
};

export default NewAccountForm;