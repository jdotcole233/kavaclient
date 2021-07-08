import React from "react";
import iRiskLogo from "../../../assets/iriskLogo.png";
import { useLayoutProps } from "../../../layout/Provider/LayoutProvider";

const ClosingSlip = () => {
  const { activeTab } = useLayoutProps();
  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-center">
        <img
          className="h-32 "
          src={activeTab === 2 ? iRiskLogo : null}
          alt=""
        />
      </div>
      <div className="mt-2 flex flex-col">
        <span>{new Date().toDateString()}</span>
        <span>The Managing Director</span>
        <span>{`Ghana Reinsurance Company Limited`}</span>
        <span>{`Accra`}</span>
        <span>{`Greater Accra - Ghana`}</span>
      </div>
    </div>
  );
};

export default ClosingSlip;
