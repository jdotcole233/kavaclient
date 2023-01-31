import { ApolloProvider } from "@apollo/client";
import { NotificationsProvider } from "@mantine/notifications";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./app/store";
import Loader from "./components/Loader";
import { client } from "./graphql/client";

type Props = {
  children: ReactNode | ReactNode[];
};

const Root = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loader page />} persistor={persistor}>
        <ApolloProvider client={client}>
          <NotificationsProvider position="top-right">
            {children}
          </NotificationsProvider>
        </ApolloProvider>
      </PersistGate>
    </Provider>
  );
};

export default Root;
