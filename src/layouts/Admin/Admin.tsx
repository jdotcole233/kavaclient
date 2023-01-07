import React, { Fragment } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { logout } from "../../features/users";
import Details from "../../pages/AllOffers/components/OfferPreview";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

type Props = {};

const Admin = (props: Props) => {
  const { access_token } = useAppSelector((state) => state.auth);
  const { selectedOffer } = useAppSelector((state) => state.offers);
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  if (!access_token) return <Navigate to={"/"} />;

  return (
    <Fragment>
      {/* <AdminProvider value={{ company, user, accessToken, linked_to }}> */}
      <div className="h-screen bg-gray-50 flex overflow-hidden">
        <Sidebar />
        {/* Content area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar />
          {/* Main content */}
          <div className="flex-1 flex items-stretch overflow-hidden">
            <Outlet />
            {/* Details sidebar */}
            {selectedOffer && pathname === "/app/offers" && <Details />}
          </div>

          {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
        </div>
      </div>
      {/* </AdminProvider> */}
    </Fragment>
  );
};

export default Admin;
