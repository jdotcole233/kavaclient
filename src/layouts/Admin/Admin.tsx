import { Fragment } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import OfferDetails from "../../pages/AllOffers/components/OfferPreview";
import TreatyPreview from "../../pages/AllTreaties/components/TreatyPreview";
import Navbar from "./components/Navbar";
import Show from "../../components/show";
import Sidebar from "./components/Sidebar";
import _ from "lodash";

type Props = {};

const Admin = (props: Props) => {
  const { access_token } = useAppSelector((state) => state.auth);
  const { selectedOffer } = useAppSelector((state) => state.offers);
  const { selectedTreaty } = useAppSelector((state) => state.treaty);
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
            <Show if={!_.isEmpty(selectedOffer) && pathname === "/app/offers"}>
              <OfferDetails />
            </Show>
            <Show
              if={!_.isEmpty(selectedTreaty) && pathname === "/app/treaties"}
            >
              <TreatyPreview />
            </Show>
          </div>

          {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
        </div>
      </div>
      {/* </AdminProvider> */}
    </Fragment>
  );
};

export default Admin;
