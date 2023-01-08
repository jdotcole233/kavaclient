/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { BrokerTypes, MockPaymentStatus } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: FetchOffers
// ====================================================

export interface FetchOffers_fetchOffers_offers_payments {
  __typename: "MockPaymentStruct";
  offer_payment_amount: number | null;
  paid_details: string | null;
}

export interface FetchOffers_fetchOffers_offers_offer_insurer {
  __typename: "MockInsurerStruct";
  insurer_company_name: string | null;
  insurer_id: string | null;
}

export interface FetchOffers_fetchOffers_offers_offer {
  __typename: "MockOffer";
  offer_id: string | null;
  insurersinsurer_id: string | null;
  insurance_company_name: string | null;
  payment_status: MockPaymentStatus | null;
  insurer: FetchOffers_fetchOffers_offers_offer_insurer | null;
}

export interface FetchOffers_fetchOffers_offers_offer_detail {
  __typename: "MockOfferDetail";
  offersoffer_id: string | null;
  insured_by: string | null;
  period_of_insurance_from: string | null;
  period_of_insurance_to: string | null;
  currency: string | null;
}

export interface FetchOffers_fetchOffers_offers_offer_extra_charges {
  __typename: "MockOfferDeduction";
  commission_amount: number | null;
  withholding_tax: number | null;
  nic_levy: number | null;
  brokerage_amount: number | null;
  brokerage: number | null;
  withholding_tax_amount: number | null;
  nic_levy_amount: number | null;
  commission: number | null;
}

export interface FetchOffers_fetchOffers_offers {
  __typename: "MockOfferStruct";
  offersoffer_id: string | null;
  offer_participant_percentage: number | null;
  offer_amount: number | null;
  participant_fac_premium: number | null;
  participant_fac_sum_insured: number | null;
  payments: (FetchOffers_fetchOffers_offers_payments | null)[] | null;
  offer: FetchOffers_fetchOffers_offers_offer | null;
  offer_detail: FetchOffers_fetchOffers_offers_offer_detail | null;
  offer_extra_charges: FetchOffers_fetchOffers_offers_offer_extra_charges | null;
}

export interface FetchOffers_fetchOffers {
  __typename: "OfferResponseData";
  total_offers: number | null;
  total_shares: string | null;
  offers: (FetchOffers_fetchOffers_offers | null)[] | null;
}

export interface FetchOffers {
  fetchOffers: FetchOffers_fetchOffers | null;
}

export interface FetchOffersVariables {
  broker: BrokerTypes;
}
