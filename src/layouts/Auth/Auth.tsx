// import { BackgroundImage } from "@mantine/core";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import SSL from "../../assets/ssl-big.png";

// import Comfi from "../assets/comfi 4.svg";

/* eslint-disable jsx-a11y/anchor-is-valid */
function Auth() {
  return (
    <Fragment>
      <div className="min-h-screen bg-white flex">
        <div className="hidden lg:block bg-white  relative w-0 flex-1 ">
          <div
            // src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
            className=" h-full w-full bg-green-300 flex flex-col items-center"
          >
            <img
              src={require("../../assets/logo.png")}
              className="w-1/2 bg-yellow-50 rounded-b-full"
              alt=""
            />
            <div className="space-y-11 w-full flex flex-col items-center h-full p-5">
              <h4 className="text-xl font-mono w-1/2 mt-3 text-center">
                Kava is a reinsurance ecosystem that provides our reinsurance
                network with business information from our network of cedants.
              </h4>

              <h4 className="text-sm w-1/2 font-light mt-3 text-center">
                Login and enjoy access to data on reinsurance offers including
                viewing credit notes and tracking payments. Don't have access?
                Send an email to info@comfytechnology.tech
              </h4>
            </div>
          </div>
          {/* <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
            alt=""
          /> */}
        </div>
        <div className="flex-1 bg-gray-50  flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="absolute bottom-10 right-10">
            <img src={SSL} alt="" />
          </div>
          <div className="mx-auto w-full max-w-sm lg:w-96">
            {/* Routes go here */}
            <Outlet />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Auth;
