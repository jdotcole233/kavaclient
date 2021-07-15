import React from "react";
import PageHeader from "../../Components/PageHeader";
import PageWrapper from "../../Components/PageWrapper";
import DashboardStats from "./components/DashboardStats";
import DashboardStatsLayer2 from "./components/DashboardStatsLayer2";

const Dashboard = () => {
  return (
    <PageWrapper>
      <PageHeader title="Dashboard" />
      <div className="flex">
        <div className="w-2/3"></div>
        <div className="w-96"></div>
      </div>
      <DashboardStats />
      <DashboardStatsLayer2 />
    </PageWrapper>
  );
};

export default Dashboard;
