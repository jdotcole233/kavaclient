import React from "react";
import PageHeader from "../../components/page-header";
import PageWrapper from "../../components/page-wrapper";
import Overview from "./components/Overview";
import TotalParticipations from "./sections/TotalParticipations";
import TotalRevenue from "./sections/TotalRevenue";
import TotalRevenuePie from "./sections/TotalRevenuePie";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <PageWrapper>
      <PageHeader title="Dashboard" />
      <Overview />
      <div className="flex mb-2 flex-col md:flex-row ">
        <div className="lg:w-2/3 h-auto">
          <TotalRevenue />
        </div>
        <div className="lg:w-1/3 ml-3">
          <TotalRevenuePie />
        </div>
      </div>
      <TotalParticipations />
    </PageWrapper>
  );
};

export default Dashboard;
