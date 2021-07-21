import React, { Fragment } from "react";
import { useLayoutProps } from "../../../layout/Provider/LayoutProvider";
import IRiskClosingSlip from "./IRiskClosingSlip";
import KEKClosingSlip from "./KEKClosingSlip";
import VisalClosingSlip from "./VisalClosinfSlip";

const ClosingSlip = ({ details }) => {
  const { activeTab } = useLayoutProps();
  return (
    <Fragment>
      {activeTab === "kekre" && <KEKClosingSlip />}
      {activeTab === "visalre" && <VisalClosingSlip />}
      {activeTab === "iriskre" && <IRiskClosingSlip />}
    </Fragment>
  );
};

export default ClosingSlip;
