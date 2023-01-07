import { gql } from "@apollo/client";


export const userLogin = gql`mutation Login($input: LoginInput) {
    login(input: $input) {
      access_token
      refresh_token
      expires_in
      token_type
      user {
        id
        email
      }
    }
  }
  `