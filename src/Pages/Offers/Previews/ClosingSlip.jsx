import React from "react";
import iRiskLogo from "../../../assets/iriskLogo.png";
import { useLayoutProps } from "../../../layout/Provider/LayoutProvider";

const ClosingSlip = () => {
  const { activeTab } = useLayoutProps();
  return (
    <div>
      <img src={activeTab === 2 ? iRiskLogo : null} alt="" />
    </div>
  );
};

export default ClosingSlip;
