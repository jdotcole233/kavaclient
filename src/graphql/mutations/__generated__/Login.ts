/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { LoginInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: Login
// ====================================================

export interface Login_login_user {
  __typename: "User";
  id: string;
  email: string;
}

export interface Login_login {
  __typename: "AuthPayload";
  access_token: string | null;
  refresh_token: string | null;
  expires_in: number | null;
  token_type: string | null;
  user: Login_login_user | null;
}

export interface Login {
  login: Login_login;
}

export interface LoginVariables {
  input?: LoginInput | null;
}
