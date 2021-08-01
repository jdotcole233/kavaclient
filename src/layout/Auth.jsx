import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import SSL from "../assets/ssl-big.png";
import Login from "../Pages/Login/Login";
import Otp from "../Pages/Otp/Otp";
import AuthProcessProvider from "./Provider/AuthProcessProvider";
// import Comfi from "../assets/comfi 4.svg";
import ConfirmAuth from "../Pages/ConfirmAuth";
import SubscriptionExpiry from "../Pages/SubscriptionExpiry";

/* eslint-disable jsx-a11y/anchor-is-valid */
function Auth() {
  const [company, setCompany] = useState(undefined);
  return (
    <AuthProcessProvider value={{ company, setCompany }}>
      <div className="min-h-screen bg-white flex">
        <div className="hidden lg:block bg-white  relative w-0 flex-1">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://www.socialbakers.com/website/storage/2020/01/OG-BLOG_data.jpg"
            alt=""
          />
        </div>
        <div className="flex-1 bg-gray-50  flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="absolute bottom-10 right-10">
            <img src={SSL} alt="" />
          </div>
          <div className="mx-auto w-full max-w-sm lg:w-96">
            {/* Routes go here */}
            <Switch>
              <Route path="/auth" exact component={Login} />
              <Route path="/auth/verify" exact component={Otp} />
              <Route path="/auth/confirm" exact component={ConfirmAuth} />
              <Route
                path="/auth/expired"
                exact
                component={SubscriptionExpiry}
              />
            </Switch>
          </div>
        </div>
      </div>
    </AuthProcessProvider>
  );
}

export default Auth;
