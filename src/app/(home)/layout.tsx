import { PropsWithChildren } from "react";
import Hero from "@/app/components/Hero/Hero";

export default function HomeLayout({ children }: PropsWithChildren) {

  return <div>
    <Hero />
    {children}
  </div>;
}