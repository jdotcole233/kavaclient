/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { BrokerTypes } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: Treaties
// ====================================================

export interface Treaties_fetchTreaties_treaties_treaty_account_id {
  __typename: "MockAccountID";
  account_periods: string | null;
  treaty_account_id: string | null;
}

export interface Treaties_fetchTreaties_treaties_layer_limit {
  __typename: "MockLayerLimit";
  limit: string | null;
  uuid: string | null;
  m_and_d_premium: number | null;
  installment_type: string | null;
}

export interface Treaties_fetchTreaties_treaties {
  __typename: "MockTreatyStruct";
  treaty_account_id: (Treaties_fetchTreaties_treaties_treaty_account_id | null)[] | null;
  treaty_type: string | null;
  layer_limit: (Treaties_fetchTreaties_treaties_layer_limit | null)[] | null;
  treaty_id: string | null;
  treaty_participation_percentage: number | null;
  treaty_name: string | null;
  treaty_reference: string | null;
  total_participation_percentage: number | null;
  insurance_company_name: string | null;
  currency: string | null;
  participant_id: string | null;
}

export interface Treaties_fetchTreaties {
  __typename: "TreatyResponseData";
  treaties: (Treaties_fetchTreaties_treaties | null)[] | null;
  total_treaties: string | null;
  total_shares: string | null;
}

export interface Treaties {
  fetchTreaties: Treaties_fetchTreaties | null;
}

export interface TreatiesVariables {
  broker: BrokerTypes;
}
