import React from "react";
import PageHeader from "../../Components/PageHeader";
import PageWrapper from "../../Components/PageWrapper";
import { useAdminProps } from "../../layout/Provider/AdminProvider";

const Dashboard = () => {
  return (
    <PageWrapper>
      <PageHeader title="Dashboard" />
    </PageWrapper>
  );
};

export default Dashboard;
