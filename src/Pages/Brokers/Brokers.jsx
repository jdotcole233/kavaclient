import React from "react";
import PageHeader from "../../Components/PageHeader";
import PageWrapper from "../../Components/PageWrapper";
import { BrokerProvider } from "./Providers/BrokerProvider";

const Brokers = () => {
  return (
    <BrokerProvider>
      <PageWrapper title="Brokers">
        <PageHeader title="Brokers" />
      </PageWrapper>
    </BrokerProvider>
  );
};

export default Brokers;
