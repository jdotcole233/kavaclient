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
        <TableRow title="Reinsured" rightValue="Glico General Insurance" />
        <TableRow title="Insured" rightValue="Bonsu Kwaku Nana" />
        <TableRow title="Policy Number" rightValue="GG-KSKS-1009-20-000444" />
        <TableRow title="Class of Insurance" rightValue="Motor Comprehensive" />
        <TableRow title="Registration" rightValue="AS 9478-20" />
        <TableRow
          title="Period of Insurance"
          rightValue="10/07/2021 - 09/07/2022"
        />
        <TableRow title="Currency" rightValue="GHS" />
        <TableRow title="Total Sum Insured" rightValue="885,000.00" />
        <TableRow title="Total Premium" rightValue="62,624.00" />
        <TableRow title="Your Share" midValue="20%" />
        <TableRow title="Your Sum Insured" rightValue="177,000.00" />
        <TableRow title="Your Premium" rightValue="12,524.80" />
      </div>
    </div>
  );
};

export default ClosingSlip;

const TableRow = ({ title, midValue, rightValue }) => (
  <Fragment>
    <div className="p-1">
      <span className="font-medium">{title}</span>
    </div>
    <div className="p-1 text-center">
      <span className="font-medium">{midValue}</span>
    </div>
    <div className="p-1 text-right">
      <span className="font-medium">{rightValue}</span>
    </div>
  </Fragment>
);
