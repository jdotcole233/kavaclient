import React, { Fragment } from "react";
import IRiskClosingSlip from "./IRiskClosingSlip";
import VisalClosingSlip from "./VisalClosinfSlip";

const ClosingSlip = () => {
  return (
    <Fragment>
      <VisalClosingSlip />
      <IRiskClosingSlip />
    </Fragment>
  );
};

export default ClosingSlip;
