import { gql } from "@apollo/client";

export const fetchTreaties = gql`
  query Treaties($broker: BrokerTypes!) {
    fetchTreaties(broker: $broker) {
      treaties {
        treaty_account_id {
          account_periods
          treaty_account_id
        }
        treaty_type
        layer_limit {
          limit
          uuid
          m_and_d_premium
          installment_type
        }
        treaty_id
        treaty_participation_percentage
        treaty_name
        treaty_reference
        total_participation_percentage
        insurance_company_name
        currency
        participant_id
      }
      total_treaties
      total_shares
    }
  }
`;
