import { useQuery } from "@apollo/client";
import { fetchOffers } from "../graphql/queries/offers";
import { FetchOffers, FetchOffersVariables } from "../graphql/queries/__generated__/FetchOffers";


export const useOffers = (variables?: FetchOffersVariables) => {
    const { data, loading, error, fetchMore, networkStatus } = useQuery<FetchOffers, FetchOffersVariables>(fetchOffers, {
        variables,
        fetchPolicy: "network-only",
        notifyOnNetworkStatusChange: true
    });

    return {
        offers: data?.fetchOffers?.offers || [],
        total_offers: data?.fetchOffers?.total_offers ?? 0,
        total_shares: JSON.parse(data?.fetchOffers?.total_shares ?? "{}"),
        loading,
        fetchMore,
        networkStatus,
        error
    }
}