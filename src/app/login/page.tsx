"use client";
import React, { useState } from "react";
import styles from "./LoginForm.module.sass";
import Link from "next/link";
import { requestToken } from "@/actions";
import { red } from "next/dist/lib/picocolors";
import { useRouter } from "next/navigation";

const LoginForm = () => {

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData: FormData = new FormData(event.target as HTMLFormElement);
    setLoading(true);
    requestToken(formData.get("email") as string, formData.get("password") as string).then((t) => {
      router.push("/store");
    }).finally(() => {
      setLoading(false);
    });
  };

  return (
    <section className={styles.formContainer}>
      <h1 className={styles.title}> Login </h1>
      <form onSubmit={onSubmit}>
        <input type="email" autoComplete={"email"} name="email" placeholder="Email" disabled={loading} />
        <input type="password" name="password" placeholder="Password" disabled={loading} />
        <input type="submit" value="Submit" disabled={loading} />
      </form>
      <p>Don't you have an account? <Link href={"/signup"}><strong> Sign Up</strong></Link></p>

      {error && <p>{error}</p>}
    </section>
  );
};

export default LoginForm;