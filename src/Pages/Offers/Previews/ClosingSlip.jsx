import React, { Fragment } from "react";
import IRiskClosingSlip from "./IRiskClosingSlip";
import KEKClosingSlip from "./KEKClosingSlip";
import VisalClosingSlip from "./VisalClosinfSlip";

const ClosingSlip = () => {
  return (
    <Fragment>
      <KEKClosingSlip />
      <VisalClosingSlip />
      {/* <IRiskClosingSlip /> */}
    </Fragment>
  );
};

export default ClosingSlip;
