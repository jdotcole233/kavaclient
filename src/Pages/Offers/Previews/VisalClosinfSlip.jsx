import React, { Fragment } from "react";
import iRiskLogo from "../../../assets/visal.png";
import { useLayoutProps } from "../../../layout/Provider/LayoutProvider";
import { classNames } from "../../../utils";

const VisalClosingSlip = () => {
  const { activeTab } = useLayoutProps();
  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-end">
        <img className="h-32 " src={iRiskLogo} alt="" />
      </div>
      <div className="mt-2 flex flex-col">
        <span className="text-center underline font-bold">
          VISAL RE: FACULTATIVE CLOSING SLIP
        </span>
      </div>

      <div className="w-full mt-3 grid grid-cols-3">
        <TableRow header midValue="Debit" rightValue="Credit" />
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

export default VisalClosingSlip;

const TableRow = ({ title, midValue, rightValue, header }) => (
  <Fragment>
    <div className={classNames(header ? "font-bold" : "", "p-1 text-gray-500")}>
      <span className="font-medium">{title}</span>
    </div>
    <div
      className={classNames(
        header ? "font-bold" : "font-medium",
        "p-1  text-gray-500 text-center"
      )}
    >
      <span className="">{midValue}</span>
    </div>
    <div
      className={classNames(
        header ? "font-bold" : "font-medium",
        "p-1 text-gray-500 text-right"
      )}
    >
      <span className="">{rightValue}</span>
    </div>
  </Fragment>
);
