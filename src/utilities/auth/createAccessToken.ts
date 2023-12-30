import { GraphqlClientSingleton } from "@/graphql";
import { customerCreateAccessTokenMutation } from "@/graphql/mutations/customerCreateAccessTokenMutation";

export default async (email: string, password: string) => {
  const graphqlClient = GraphqlClientSingleton.getInstance().getClient();
  const data = await graphqlClient.request(customerCreateAccessTokenMutation, {
    email,
    password
  });
}