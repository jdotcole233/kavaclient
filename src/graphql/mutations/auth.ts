import { gql } from "@apollo/client";


export const userLogin = gql`mutation Login($input: LoginInput) {
  login(input: $input) {
    user {
      clientable {
        ... on Insurer_associate {
          assoc_first_name
          assoc_last_name
          assoc_primary_phonenumber
          assoc_secondary_phonenumber
          assoc_email
          position
          insurer {
            insurer_company_name
            insurer_company_email
          }
        }
        ... on Reinsurer_representative {
          rep_first_name
          rep_last_name
          rep_primary_phonenumber
          rep_secondary_phonenumber
          rep_email
          position
          reinsurer {
            re_company_name
            re_company_email
            re_company_website
          }
        }
      }
      id
      email
    }
    access_token
    refresh_token
    expires_in
    token_type
  }
}
  `