import { gql } from "@apollo/client";


export const fetchOffers = gql`
query FetchOffers($broker: BrokerTypes!) {
  fetchOffers(broker: $broker) {
    total_offers
    total_shares
    offers {
      offersoffer_id
      offer_participant_percentage
      offer_amount
      participant_fac_premium
      participant_fac_sum_insured
      payments {
        offer_payment_amount
        paid_details
      }
      offer {
        offer_id
        insurersinsurer_id
        insurance_company_name
        payment_status
        insurer {
          insurer_company_name
          insurer_id
        }
      }
      offer_detail {
        offersoffer_id
        insured_by
        period_of_insurance_from
        period_of_insurance_to
        currency
      }
    }
  }
}
`