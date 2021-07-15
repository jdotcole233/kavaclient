import React from "react";
import PageHeader from "../../Components/PageHeader";
import PageWrapper from "../../Components/PageWrapper";
import DashboardStats from "./components/DashboardStats";
import DashboardStatsLayer2 from "./components/DashboardStatsLayer2";

const Dashboard = () => {
  return (
    <PageWrapper>
      <PageHeader title="Dashboard" />
      <div className="flex w-full">
        <div className="w-auto py-3 bg-white shadow-sm">Hello</div>
        <div className="w-96"></div>
      </div>
      <DashboardStats />
      <DashboardStatsLayer2 />
    </PageWrapper>
  );
};

export default Dashboard;
