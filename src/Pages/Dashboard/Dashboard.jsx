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
      <div className="flex">
        <div className="w-2/3">
          <TotalParticipations />
        </div>
        <div className="w-1/3 ml-3">
          <div className="bg-white shadow-md"></div>
        </div>
      </div>
      <TotalRevenue />
    </PageWrapper>
  );
};

export default Dashboard;
