import { useQuery } from "@apollo/client";
import { fetchTreaties } from "../graphql/queries/treaties";
import { FetchTreaties, FetchTreatiesVariables } from "../graphql/queries/__generated__/FetchTreaties";


export const useTreaties = (variables?: FetchTreatiesVariables) => {
    const { data, loading, error, networkStatus, fetchMore, refetch } = useQuery<FetchTreaties, FetchTreatiesVariables>(fetchTreaties, {
        variables,
        notifyOnNetworkStatusChange: true,
        fetchPolicy: "network-only"
    });

    return {
        treaties: data?.fetchTreaties?.treaties || [],
        total_shares: data?.fetchTreaties?.total_shares,
        total_treaties: data?.fetchTreaties?.total_treaties,
        loading,
        error,
        networkStatus,
        fetchMore,
        refetch
    }
}