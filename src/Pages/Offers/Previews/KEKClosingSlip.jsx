import React, { Fragment } from "react";
import iRiskLogo from "../../../assets/kek.png";
import { useLayoutProps } from "../../../layout/Provider/LayoutProvider";
import { classNames } from "../../../utils";

const KEKClosingSlip = () => {
  const { activeTab } = useLayoutProps();
  return (
    <div className="w-full">
      <div className="w-full flex items-center justify-end">
        <img className="h-20 " src={iRiskLogo} alt="" />
      </div>
      <div className="mt-2 flex flex-col">
        <span className="text-center underline font-bold">
          VISAL RE: FACULTATIVE CLOSING SLIP
        </span>
      </div>

      <div className="px-20 mt-3">
        {/* <TwoColRow title="Ref#" value="P-950-1051-2020-000005" /> */}
        <TwoColRow title="To" value="GHANA REINSURANCE COMPANY" />
        <TwoColRow title="REGISTRATION" value="GN 5762-19" />
        <TwoColRow title="TYPE" value="MOTOR COMPREHENSIVE" />
        <TwoColRow title="FORM" value="As Original and/ Slip Policy Reins" />
        <TwoColRow title="REINSURED" value="VANGUARD ASSURANCE COMPANY" />
        <TwoColRow title="INSURED" value="SETH FIAITI" />
        <TwoColRow title="PERIOD" value="01/01/2020 - 31/12/2020" />
        <TwoColRow
          title="PAYMENT TYPE"
          value="Facultative Premium payable in full at inception"
        />
        <TwoColRow title="CURRENCY" value="USD" />
      </div>

      <div className="w-full px-10 mt-6 grid grid-cols-3">
        <TableRow header midValue="Debit" rightValue="Credit" />
        <TableRow title="100% Premium" rightValue="1,457.56" />
        <TableRow title="Facultative Premium" rightValue="626.75" />
        <TableRow title="Less Commission (21.5%)" midValue="134.75" />
        <TableRow title="Brokerage (5%)" midValue="31.34" />
        <TableRow title="NIC Levy (0%)" midValue="NIL" />
        <TableRow title="Withholding Tax (0%)" midValue="NIL" />
        <TableRow
          header
          title="Balance Due to Reinsurers"
          rightValue="460.66"
        />
      </div>
      <div className="flex flex-col px-10">
        <span className="my-2 ml-1">
          Facultative Premium payable in full at inception
        </span>
        <span className="ml-1">
          Your reinsurance participation: 43% of 100%
        </span>
      </div>
    </div>
  );
};

export default KEKClosingSlip;

const TableRow = ({ title, midValue, rightValue, header }) => (
  <Fragment>
    <div
      className={classNames(
        header ? "font-bold text-gray-700" : "font-medium",
        "p-1 text-gray-500"
      )}
    >
      <span className="">{title}</span>
    </div>
    <div
      className={classNames(
        header ? "font-bold text-gray-700" : "font-medium",
        "p-1  text-gray-500 text-center"
      )}
    >
      <span className="">{midValue}</span>
    </div>
    <div
      className={classNames(
        header ? "font-bold text-gray-700" : "font-medium",
        "p-1 text-gray-500 text-right"
      )}
    >
      <span className="">{rightValue}</span>
    </div>
  </Fragment>
);

const TwoColRow = ({ title, value }) => (
  <div className="grid mb-3 grid-cols-2">
    <div>
      <span className="font-semibold">{title}</span>
    </div>
    <div>
      <span className="font-thin">{value}</span>
    </div>
  </div>
);
