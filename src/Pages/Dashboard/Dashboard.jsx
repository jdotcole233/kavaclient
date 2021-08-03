import React from "react";
import PageHeader from "../../Components/PageHeader";
import PageWrapper from "../../Components/PageWrapper";
import { useAdminProps } from "../../layout/Provider/AdminProvider";
import TotalParticipations from "./components/Totalparticipations/TotalParticipations";

const Dashboard = () => {
  return (
    <PageWrapper>
      <PageHeader title="Dashboard" />
      <TotalParticipations />
    </PageWrapper>
  );
};

export default Dashboard;
