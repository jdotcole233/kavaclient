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
          <div className="bg-red-200 text-red-800 flex flex-col p-4">
            <span>
              Thanks for using our Broker Extension – we hope we were able to
              meet your expectations. Just to let you know that your
              subscription expired yesterday and you won’t be able to use our
              service any more
            </span>
            <span>
              But it’s not too late! You can gain immediate access to your saved
              data and preferences by renewing from the administrators If you
              renew within the next seven days, you’ll also be able to take
              advantage of our one-time 10% discount for returning customers.
            </span>

            <span>
              In case you have any issues or questions, don’t hesitate to talk
              to us. You can use our live chat, or email us at success@acme.com.
            </span>
          </div>
        </Fragment>
      </div>
    </Fragment>
  );
};

export default ConfirmAuth;
