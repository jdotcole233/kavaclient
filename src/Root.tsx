import { ApolloProvider } from "@apollo/client";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { client } from "./graphql/client";

type Props = {
  children: ReactNode | ReactNode[];
};

const Root = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </Provider>
  );
};

export default Root;
