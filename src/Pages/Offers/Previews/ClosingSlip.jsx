import React, { Fragment } from "react";
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
        <span className="mb-2">{new Date().toDateString()}</span>
        <span>The Managing Director</span>
        <span>{`Ghana Reinsurance Company Limited`}</span>
        <span>{`Accra`}</span>
        <span>{`Greater Accra - Ghana`}</span>
        <span className="my-3">Dear Sir/Madam</span>
        <span className="font-bold">Facultative Reinsurance Application</span>
        <span>
          We refer to the risk below and your subsequent acceptance of a share
          of the same risk. Kindly issue your guarantee in accordance with the
          information below.
        </span>
      </div>

      <div className="w-full border mt-3 grid grid-cols-3   divide-y divide-x divide-gray-300">
        <Fragment>
          <div className="px-2 border">
            <span className="font-medium">Reinsured</span>
          </div>
          <div className="px-2">
            <span className="font-medium"></span>
          </div>
          <div className="px-2">
            <span className="font-medium">Glico General Insurance</span>
          </div>
        </Fragment>

        <Fragment>
          <div className="px-2">
            <span className="font-medium">Policy Number</span>
          </div>
          <div className="px-2">
            <span className="font-medium"></span>
          </div>
          <div className="px-2">
            <span className="font-medium">Glico General Insurance</span>
          </div>
        </Fragment>
      </div>
    </div>
  );
};

export default ClosingSlip;

const TableRow = ({ title, midValue, rightValue }) => (
  <Fragment>
    <div className="px-2">
      <span className="font-medium">{title}</span>
    </div>
    <div className="px-2">
      <span className="font-medium">{midValue}</span>
    </div>
    <div className="px-2">
      <span className="font-medium">{rightValue}</span>
    </div>
  </Fragment>
);
