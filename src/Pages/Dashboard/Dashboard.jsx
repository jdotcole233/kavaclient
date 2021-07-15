import React from "react";
import PageHeader from "../../Components/PageHeader";
import PageWrapper from "../../Components/PageWrapper";
import DashboardStats from "./components/DashboardStats";
import DashboardStatsLayer2 from "./components/DashboardStatsLayer2";
import DashboardSvg from "./components/DashboardSvg";

const Dashboard = () => {
  return (
    <PageWrapper>
      <PageHeader title="Dashboard" />
      <div className="flex lg:flex-row flex-col w-full mt-4">
        <div className="lg:w-full w-full flex lg:flex-row flex-col bg-white shadow-md p-4 rounded">
          <div className=" h-32 w-1/5 bg-gray-300 rounded-full"></div>
          <div className="lg:mx-11 flex w-full justify-between">
            <div>
              <span className="text-gray-700 font-medium text-3xl">
                Vanguard Assurance
              </span>
              <div className="grid mt-3 grid-cols-1 lg:grid-cols-2">
                <span>Accra</span>
                <span>vanguardassurance@mail.com</span>
                <span>Ghana</span>
                <span>0506339153,0274488676</span>
              </div>
            </div>
            <div>
              <DashboardSvg />
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full bg-green-700 shadow-md rounded ml-5"></div>
      </div>
      <DashboardStats />
      <DashboardStatsLayer2 />
    </PageWrapper>
  );
};

export default Dashboard;
