import React, { Fragment } from "react";
import { Redirect } from "react-router-dom";
import { useAuthProcessProps } from "../../layout/Provider/AuthProcessProvider";
import Comfi from "../../assets/comfi 4.svg";

const ConfirmAuth = () => {
  const { company } = useAuthProcessProps();
  if (!company) return <Redirect to="/auth" />;
  return (
    <Fragment>
      <div>
        <img className="h-24 w-auto" src={Comfi} alt="Workflow" />
        <Fragment>
          <h2 className="mt-6 text-3xl font-poppins font-extrabold text-gray-900">
            Welcome, {company?.company_name} {}
          </h2>
          <div className="bg-yellow-200 text-red-800 p-4">
            <span className={"text-yellow-800 font-poppins"}>
              Please check your mail for a provided passcode to enable you login
              to your account
            </span>
          </div>
        </Fragment>
      </div>
    </Fragment>
  );
};

export default ConfirmAuth;
