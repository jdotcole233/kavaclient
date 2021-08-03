import React from "react";
import PageHeader from "../../Components/PageHeader";
import PageWrapper from "../../Components/PageWrapper";
import { useAdminProps } from "../../layout/Provider/AdminProvider";

const Dashboard = () => {
  return (
    <PageWrapper>
      <PageHeader title="Dashboard" />
      <div className="bg-white shadow-md p-3 flex flex-col">
        <div className="flex justify-between">
          <div className="">
            <span className="text-2xl font-semibold">
              Total Parrticipations
            </span>
          </div>
          <div className="flex">
            <div className="grid grid-cols-2">
              <div className="bg-gray-50 px-4 flex items-center justify-center hover:bg-green-400 focus:bg-green-400 hover:text-white border border-green-600">
                <span>Month</span>
              </div>
              <div className="bg-gray-50 px-4 border border-green-600">
                <span>Year</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Dashboard;
