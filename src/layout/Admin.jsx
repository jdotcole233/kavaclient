/* eslint-disable jsx-a11y/no-redundant-roles */
import { useState } from "react";
import { LayoutProvider } from "./Provider/LayoutProvider";
import Sidebar from "./components/Sidebar";
import Details from "./components/Details";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import { useLocation } from "react-router-dom";

function Admin() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState(undefined);
  const [activeTab, setActiveTab] = useState(0);

  const { pathname } = useLocation();

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
      <div className="h-screen bg-gray-50 flex overflow-hidden">
        <Sidebar />
        {/* Content area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar />
          {/* Main content */}
          <div className="flex-1 flex items-stretch overflow-hidden">
            <Content />
            {/* Details sidebar */}
            {selectedOffer && pathname === "/offers" && <Details />}
          </div>
        </div>
      </div>
    </LayoutProvider>
  );
}

export default Admin;
