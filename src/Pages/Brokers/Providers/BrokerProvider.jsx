import { createContext, useContext } from "react";

const BrokerContext = createContext();

export const BrokerProvider = BrokerContext.Provider;
export const useBrokerProps = () => useContext(BrokerContext);
