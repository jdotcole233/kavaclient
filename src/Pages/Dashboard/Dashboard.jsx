import React from "react";
import PageHeader from "../../Components/PageHeader";
import PageWrapper from "../../Components/PageWrapper";
import { useAdminProps } from "../../layout/Provider/AdminProvider";
import TotalParticipations from "./components/Totalparticipations/TotalParticipations";
import TotalRevenue from "./components/TotalRevenue/TotalRevenue";

const Dashboard = () => {
  return (
    <PageWrapper>
      <PageHeader title="Dashboard" />
      <div className="flex items-stretch">
        <div className="w-2/3">
          <TotalRevenue />
        </div>
        <div className="w-1/3 ml-3">
          <div className="bg-white h-auto shadow-md p-3"></div>
        </div>
      </div>
      <TotalParticipations />
    </PageWrapper>
  );
};

export default Dashboard;
