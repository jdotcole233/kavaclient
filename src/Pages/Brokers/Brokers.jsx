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
            <div className="bg-gray-50 w-11 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 text-gray-500 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </PageWrapper>
    </BrokerProvider>
  );
};

export default Brokers;
