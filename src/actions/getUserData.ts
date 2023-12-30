"use server";
import { GraphqlClientSingleton } from "@/graphql";
import { getCustomerQuery } from "@/graphql/query/getCustomer";

export const getUserData = async (token: string) => {
  const graphqlInstance = GraphqlClientSingleton.getInstance().getClient();
  const data = await graphqlInstance.request<{
    customer: {
      firstName: string;
      email: string;
    }
  }>(getCustomerQuery, {
    customerAccessToken: token
  });

  return data.customer;
};