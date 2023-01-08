import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import SSL from "../../assets/ssl-big.png";

// import Comfi from "../assets/comfi 4.svg";

/* eslint-disable jsx-a11y/anchor-is-valid */
function Auth() {
  return (
    <Fragment>
      <div className="min-h-screen bg-white flex">
        <div className="hidden lg:block bg-white  relative w-0 flex-1">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
            alt=""
          />
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
