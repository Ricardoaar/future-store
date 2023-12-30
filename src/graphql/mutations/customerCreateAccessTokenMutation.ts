import { gql } from "graphql-request";

export const customerCreateAccessTokenMutation = gql`
    mutation customerAccessTokenCreate ($email: String!, $password: String!) {
        customerAccessTokenCreate(input: {email: $email, password: $password}) {
            customerAccessToken {
                accessToken
                expiresAt
            }
            customerUserErrors {
                message
            }
        }
    }
`;