import React from "react";
import PageHeader from "../../Components/PageHeader";
import PageWrapper from "../../Components/PageWrapper";
import { useAdminProps } from "../../layout/Provider/AdminProvider";
import Overview from "./components/Overview/Overview";
import TotalParticipations from "./components/Totalparticipations/TotalParticipations";
import TotalRevenue from "./components/TotalRevenue/TotalRevenue";
import TotalRevenuePie from "./components/TotalRevenuePie/TotalRevenuePie";

const Dashboard = () => {
  return (
    <PageWrapper>
      <PageHeader title="Dashboard" />
      <Overview />
      <div className="flex mb-2 ">
        <div className="w-2/3 h-auto">
          <TotalRevenue />
        </div>
        <div className="w-1/3 ml-3">
          <TotalRevenuePie />
        </div>
      </div>
      <TotalParticipations />
    </PageWrapper>
  );
};

export default Dashboard;
