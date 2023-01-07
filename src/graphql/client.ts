import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { store } from "../app/store";
import { TOKEN_KEY } from "../constants";

const URL =
    process.env.NODE_ENV === "development"
        ? "https://managekava.comfybroker.com/graphql"
        : "https://managekava.comfybroker.com/graphql";

export const TOKEN_str = "duke-token-web";

const httpLink = createHttpLink({
    uri: URL,
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem(TOKEN_KEY);
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: `Bearer ${store.getState().auth.access_token}`,
        },
    };
});/*  */

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export { client };
