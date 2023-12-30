import { cookies } from "next/headers";
import { NavBar } from "@/app/components/shared/NavBar/NavBar";
import { getUserData } from "@/actions/getUserData";

export const NavBarServer = async () => {
  const token = cookies().get("token")?.value;

  let user;
  if (token) user = await getUserData(token);

  return <NavBar token={token} user={user}  />;
};