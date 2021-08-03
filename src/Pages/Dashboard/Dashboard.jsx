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
      <div>
        <div className="bg-white overflow-hidden shadow rounded-none">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm leading-5 font-light text-cool-gray-900 truncate">
                    Total Sales
                  </dt>
                  <dd>
                    <div className="text-lg leading-7 font-medium text-cool-gray-900">
                      Gh₵ 30,659.45
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="bg-cool-gray-50 px-5 py-3">
            <div className="text-sm leading-5">
              <button className="font-medium text-purple-600 hover:text-purple-900 focus:outline-none transition ease-in-out duration-150">
                View all
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mb-2 items-stretch">
        <div className="w-2/3 h-auto">
          <TotalRevenue />
        </div>
        <div className="w-1/3 ml-3">
          <div className="bg-white h-auto mt-4 shadow-md p-3"></div>
        </div>
      </div>
      <TotalParticipations />
    </PageWrapper>
  );
};

export default Dashboard;
