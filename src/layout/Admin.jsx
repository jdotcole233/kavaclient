/* eslint-disable jsx-a11y/no-redundant-roles */
import { useMemo, useState } from "react";
import { LayoutProvider } from "./Provider/LayoutProvider";
import Sidebar from "./components/Sidebar";
import Details from "./components/Details";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import { Redirect, useLocation } from "react-router-dom";
import AdminProvider from "./Provider/AdminProvider";

function Admin() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState(undefined);

  const { pathname } = useLocation();

  const { company, user, accessToken, linked_to, locked } = useMemo(() => {
    const data = localStorage.getItem("___tken");
    if (data) {
      return JSON.parse(data);
    }
    return {
      company: null,
      user: null,
      linked_to: [],
      accessToken: "",
      locked: false,
    };
  }, []);
  const [activeTab, setActiveTab] = useState(linked_to[0] ?? "");

  if (locked) return <Redirect to="/auth" />;

  return (
    <LayoutProvider
      value={{
        mobileMenuOpen,
        setMobileMenuOpen,
        setSelectedOffer,
        selectedOffer,
        activeTab,
        setActiveTab,
      }}
    >
      <AdminProvider value={{ company, user, accessToken, linked_to }}>
        <div className="h-screen bg-gray-50 flex overflow-hidden">
          <Sidebar />
          {/* Content area */}
          <div className="flex-1 flex flex-col overflow-hidden">
            <Navbar />
            {/* Main content */}
            <div className="flex-1 flex items-stretch overflow-hidden">
              <Content />
              {/* Details sidebar */}
              {selectedOffer && pathname === "/app/offers" && <Details />}
            </div>

            {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
          </div>
        </div>
      </AdminProvider>
    </LayoutProvider>
  );
}

export default Admin;
