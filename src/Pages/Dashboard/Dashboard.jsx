import React from "react";
import PageHeader from "../../Components/PageHeader";
import PageWrapper from "../../Components/PageWrapper";
import { useAdminProps } from "../../layout/Provider/AdminProvider";

const Dashboard = () => {
  return (
    <PageWrapper>
      <PageHeader title="Dashboard" />
      <div className="bg-white p-3 flex flex-col">
        <div className="flex">
          <div className="">
            <span>Total Parrticipations</span>
          </div>
          <div className="flex">
            <div className="grid">
              <div className="bg-gray-300">
                <span>Month</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Dashboard;
