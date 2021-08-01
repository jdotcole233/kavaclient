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
        </Fragment>
        <div className="flex">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-11 w-11"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>
          <div>
            <span>{}</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ConfirmAuth;
