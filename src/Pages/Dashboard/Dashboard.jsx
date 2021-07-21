import React from "react";
import PageHeader from "../../Components/PageHeader";
import PageWrapper from "../../Components/PageWrapper";
import { useAdminProps } from "../../layout/Provider/AdminProvider";
import DashboardStats from "./components/DashboardStats";
import DashboardStatsLayer2 from "./components/DashboardStatsLayer2";
import DashboardSvg from "./components/DashboardSvg";

const Dashboard = () => {
  const { user } = useAdminProps();
  return (
    <PageWrapper>
      <PageHeader title="Dashboard" />
      <div className="flex lg:flex-row  flex-col w-full mt-4">
        <div className="lg:w-full w-full flex lg:items-center lg:flex-row flex-col bg-gray-100 shadow-md p-4 rounded">
          <div className=" w-1/5 ">
            <div className="bg-green-200 h-32 flex text-4xl text-green-600 items-center justify-center w-32 rounded-full">
              {user?.rep_first_name?.charAt(0)}
              {user?.rep_last_name?.charAt(0)}
            </div>
          </div>
          <div className="lg:mx-11 flex lg:items-center w-full justify-between">
            <div>
              <span className="text-gray-700 font-medium text-3xl">
                {user?.rep_first_name} {user?.rep_last_name}
              </span>
              <div className="grid mt-3 grid-cols-1 lg:grid-cols-2">
                <span> {user?.re_company_website}</span>
                <span> {user?.rep_email}</span>
                <span> {user?.position}</span>
                <span> {user?.rep_primary_phonenumber}</span>
              </div>
            </div>
            <div className="hidden lg:block">
              <DashboardSvg />
            </div>
          </div>
        </div>
        {/* <div className="lg:w-1/2 w-full bg-green-500 shadow-md rounded ml-5"></div> */}
      </div>
      <DashboardStats />
      <DashboardStatsLayer2 />
    </PageWrapper>
  );
};

export default Dashboard;
