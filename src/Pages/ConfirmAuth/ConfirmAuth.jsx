import React from "react";
import { Redirect } from "react-router-dom";
import { useAuthProcessProps } from "../../layout/Provider/AuthProcessProvider";

const ConfirmAuth = () => {
  const { company } = useAuthProcessProps();
  if (!company) return <Redirect to="/auth" />;
  return <div></div>;
};

export default ConfirmAuth;
