import React from "react";
import iRiskLogo from "../../../assets/iriskLogo.png";
import { useLayoutProps } from "../../../layout/Provider/LayoutProvider";

const ClosingSlip = () => {
  const { activeTab } = useLayoutProps();
  return (
    <div className="w-full">
      <div>
        <img src={activeTab === 2 ? iRiskLogo : null} alt="" />
      </div>
    </div>
  );
};

export default ClosingSlip;
