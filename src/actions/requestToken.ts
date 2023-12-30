"use server";
import { GraphqlClientSingleton } from "@/graphql";
import { cookies } from "next/headers";
import { customerCreateAccessTokenMutation } from "@/graphql/mutations/customerCreateAccessTokenMutation";

export const requestToken = async (email: string, password: string) => {
  const graphqlInstance = GraphqlClientSingleton.getInstance().getClient();
  const cookiesStore = cookies();
  const variables = {
    email,
    password

  };

  const { customerAccessTokenCreate: response } = await graphqlInstance.request<{
    customerAccessTokenCreate: {
      customerAccessToken: {
        accessToken: string
        expiresAt: string
      }
    }
  }>(customerCreateAccessTokenMutation, variables);
  if (response?.customerAccessToken?.accessToken) {
    cookiesStore.set("token", response.customerAccessToken.accessToken, {
      expires: new Date(response.customerAccessToken.expiresAt),
      httpOnly: false,
      sameSite: "strict",
      path: "/"
    });
  }

  return response.customerAccessToken;

};
