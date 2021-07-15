import React from "react";
import PageHeader from "../../Components/PageHeader";
import PageWrapper from "../../Components/PageWrapper";
import DashboardStats from "./components/DashboardStats";
import DashboardStatsLayer2 from "./components/DashboardStatsLayer2";

const Dashboard = () => {
  return (
    <PageWrapper>
      <PageHeader title="Dashboard" />
      <div className="flex w-full mt-4">
        <div className="w-full flex bg-white shadow-md p-4 rounded">
          <div className="w-32 h-32 bg-gray-500 rounded-full"></div>
          <div className="mx-11">
            <span className="text-gray-700 font-medium">
              Full name of Reinsurer
            </span>
          </div>
        </div>
        <div className="w-1/2 bg-green-700 shadow-md rounded ml-5"></div>
      </div>
      <DashboardStats />
      <DashboardStatsLayer2 />
    </PageWrapper>
  );
};

export default Dashboard;
