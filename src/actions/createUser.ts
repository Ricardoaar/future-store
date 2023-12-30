"use server";
import { GraphqlClientSingleton } from "@/graphql";
import { createUserMutation } from "@/graphql/mutations/createUserMutation";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const createUser = async (user: FormData) => {
  const graphqlInstance = GraphqlClientSingleton.getInstance().getClient();
  const formDataObject = Object.fromEntries(user.entries());
  const variables = {
    input: {
      firstName: formDataObject.firstName,
      lastName: formDataObject.lastName,
      email: formDataObject.email,
      password: formDataObject.password,
      phone: "+522482088307"
    }
  };

  const data = await graphqlInstance.request(createUserMutation, variables);

  return data;
};