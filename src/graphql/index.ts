import { GraphQLClient } from "graphql-request";
import { ENV } from "@/services/shopify/env";

export class GraphqlClientSingleton {
  private static instance: GraphqlClientSingleton;
  private endpoint = ENV.shopifyGraphqlEndpoint;

  private constructor() {
  }

  public static getInstance(): GraphqlClientSingleton {
    if (!GraphqlClientSingleton.instance) {
      GraphqlClientSingleton.instance = new GraphqlClientSingleton();
    }
    return GraphqlClientSingleton.instance;
  }

  public getClient(): GraphQLClient {
    return new GraphQLClient(this.endpoint, {
      headers: {
        "Shopify-Storefront-Private-Token": ENV.shopifyStorefrontPrivateToken
      }
    });
  }
}