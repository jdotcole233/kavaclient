import React, { Fragment } from "react";
import iRiskLogo from "../../../assets/visal.png";
import { useLayoutProps } from "../../../layout/Provider/LayoutProvider";
import { classNames, showOfferDate, toMoney } from "../../../utils";

const extractRegNumber = (details) => {
  const _ = details.find((el) => el.keydetail === "Vehicle Reg No");
  return _.value;
};

const VisalClosingSlip = () => {
  const { selectedOffer } = useLayoutProps();
  const details = JSON.parse(selectedOffer?.offer_details ?? "{}");
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

      <div className="px-10 mt-3">
        <TwoColRow title="Ref#" value={selectedOffer?.policy_number} />
        <TwoColRow title="To" value={selectedOffer?.re_company_name} />

        {selectedOffer?.business_name?.includes("Motor") && (
          <TwoColRow title="REGISTRATION" value={extractRegNumber(details)} />
        )}
        <TwoColRow title="TYPE" value={selectedOffer?.business_name} />
        <TwoColRow
          title="REINSURED"
          value={selectedOffer?.insurer_company_name}
        />
        <TwoColRow title="INSURED" value={selectedOffer?.insured_by} />
        <TwoColRow title="PERIOD" value={showOfferDate(selectedOffer)} />
        <TwoColRow title="CURRENCY" value={selectedOffer?.currency} />
      </div>

      <div className="w-full px-10 mt-6 grid grid-cols-3">
        <TableRow header midValue="Debit" rightValue="Credit" />
        <TableRow
          title="100% Premium"
          rightValue={toMoney(selectedOffer?.premium)}
        />
        <TableRow
          title="Facultative Premium"
          rightValue={toMoney(selectedOffer?.fac_premium)}
        />
        <TableRow
          title={`Less Commission (${selectedOffer?.agreed_commission}%)`}
          midValue={toMoney(selectedOffer?.commission_amount)}
        />
        <TableRow
          title={`Brokerage (${selectedOffer?.agreed_brokerage_percentage}%)`}
          midValue={toMoney(selectedOffer?.brokerage_amount) ?? "NIL"}
        />
        <TableRow
          // title=" (0%)"
          title={`NIC Levy (${selectedOffer?.nic_levy}%)`}
          midValue={toMoney(selectedOffer?.nic_levy_amount) ?? "NIL"}
        />
        <TableRow
          // title=" (0%)"
          title={`Withholding Tax (${selectedOffer?.withholding_tax}%)`}
          midValue={toMoney(selectedOffer?.withholding_tax_amount) ?? "NIL"}
        />
        <TableRow
          header
          title="Balance Due to Reinsurers"
          rightValue={toMoney(selectedOffer?.offer_amount)}
        />
      </div>
      <div className="flex flex-col px-10">
        <span className="my-2 ml-1">
          Facultative Premium payable in full at inception
        </span>
        <span className="ml-1">
          Your reinsurance participation:{" "}
          {selectedOffer?.offer_participant_percentage}% of 100%
        </span>
      </div>
    </div>
  );
};

export default VisalClosingSlip;

const TableRow = ({ title, midValue, rightValue, header }) => (
  <Fragment>
    <div
      className={classNames(
        header ? "font-bold text-gray-700" : "font-medium",
        "p-1 text-gray-700"
      )}
    >
      <span className="">{title}</span>
    </div>
    <div
      className={classNames(
        header ? "font-bold text-gray-700" : "font-medium",
        "p-1  text-gray-700 text-center"
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
      <span className="font-bold">{title}</span>
    </div>
    <div>
      <span className="font-medium">{value}</span>
    </div>
  </div>
);
