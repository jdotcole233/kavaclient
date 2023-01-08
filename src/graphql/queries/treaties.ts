import { gql } from "@apollo/client";


export const fetchTreaties = gql`
query FetchTreaties($broker: BrokerTypes!) {
  fetchTreaties(broker: $broker) {
    treaties {
      treaty_id
      treaty_participation_percentage
      treaty_type
      treaty_name
      treaty_reference
      total_participation_percentage
      insurance_company_name
      currency
      participant_id
      treaty_account_id {
        treaty_account_id
        account_periods
      }
      layer_limit {
        limit
        uuid
        m_and_d_premium
        installment_type
      }
    }
    total_shares
    total_treaties
  }
}
`