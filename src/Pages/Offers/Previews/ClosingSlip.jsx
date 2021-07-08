import React, { Fragment } from "react";
import { useLayoutProps } from "../../../layout/Provider/LayoutProvider";
import IRiskClosingSlip from "./IRiskClosingSlip";
import KEKClosingSlip from "./KEKClosingSlip";
import VisalClosingSlip from "./VisalClosinfSlip";

const ClosingSlip = () => {
  const { activeTab } = useLayoutProps();
  return (
    <Fragment>
      {activeTab === 1 && <KEKClosingSlip />}
      {activeTab === 0 && <VisalClosingSlip />}
      {activeTab === 2 && <IRiskClosingSlip />}
    </Fragment>
  );
};

export default ClosingSlip;
