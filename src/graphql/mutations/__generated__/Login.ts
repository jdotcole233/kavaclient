/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LoginInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: Login
// ====================================================

export interface Login_login_user_clientable_Insurer_associate_insurer {
  __typename: "Insurer";
  insurer_company_name: string | null;
  insurer_company_email: string | null;
}

export interface Login_login_user_clientable_Insurer_associate {
  __typename: "Insurer_associate";
  assoc_first_name: string | null;
  assoc_last_name: string | null;
  assoc_primary_phonenumber: string | null;
  assoc_secondary_phonenumber: string | null;
  assoc_email: string | null;
  position: string | null;
  insurer: Login_login_user_clientable_Insurer_associate_insurer | null;
}

export interface Login_login_user_clientable_Reinsurer_representative_reinsurer {
  __typename: "Reinsurer";
  re_company_name: string | null;
  re_company_email: string | null;
  re_company_website: string | null;
}

export interface Login_login_user_clientable_Reinsurer_representative {
  __typename: "Reinsurer_representative";
  rep_first_name: string | null;
  rep_last_name: string | null;
  rep_primary_phonenumber: string | null;
  rep_secondary_phonenumber: string | null;
  rep_email: string | null;
  position: string | null;
  reinsurer: Login_login_user_clientable_Reinsurer_representative_reinsurer | null;
}

export type Login_login_user_clientable = Login_login_user_clientable_Insurer_associate | Login_login_user_clientable_Reinsurer_representative;

export interface Login_login_user {
  __typename: "User";
  clientable: Login_login_user_clientable | null;
  id: string;
  email: string;
}

export interface Login_login {
  __typename: "AuthPayload";
  user: Login_login_user | null;
  access_token: string | null;
  refresh_token: string | null;
  expires_in: number | null;
  token_type: string | null;
}

export interface Login {
  login: Login_login;
}

export interface LoginVariables {
  input?: LoginInput | null;
}
