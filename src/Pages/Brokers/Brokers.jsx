import React from "react";
import PageHeader from "../../Components/PageHeader";
import PageWrapper from "../../Components/PageWrapper";
import { BrokerProvider } from "./Providers/BrokerProvider";

const Brokers = () => {
  return (
    <BrokerProvider>
      <PageWrapper title="Brokers">
        <PageHeader title="Brokers" />
        <div className="flex  justify-between">
          <div></div>
          <div className="flex shadow-md rounded-sm">
            <input type="text" className="p-3" />
            <div className="bg-gray-400"></div>
          </div>
        </div>
      </PageWrapper>
    </BrokerProvider>
  );
};

export default Brokers;
