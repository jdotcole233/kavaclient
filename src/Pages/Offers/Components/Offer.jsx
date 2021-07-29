import React from "react";
import { useLayoutProps } from "../../../layout/Provider/LayoutProvider";
import { classNames, showOfferDate, toMoney } from "../../../utils";
import PDF from "../../../assets/pdf.png";

const Offer = ({ file = {} }) => {
  const { setSelectedOffer, selectedOffer } = useLayoutProps();
  const active = file?.offer_id === selectedOffer?.offer_id;
  return (
    <li
      onClick={() => setSelectedOffer(file)}
      key={file.name}
      className="relative cursor-pointer"
    >
      <div
        className={classNames(
          active ? "bg-gray-200" : "bg-white",
          " focus:border-indigo-600 font-poppins border shadow-md flex items-center p-3"
        )}
      >
        <div className="w-22">
          {/* <DocumentTextIcon className="h-11 w-11 text-green-600" /> */}
          <img src={PDF} className="h-20 w-20" alt="" />
        </div>
        <div className="w-auto flex-1 items-start flex flex-col">
          <span className="font-semibold">
            Cedant: {file?.insurer_company_name}
          </span>
          <span>Period: {showOfferDate(file)}</span>
          <span>Insured: {file?.insured_by}</span>

          <span className="text-gray-600 font-thin">
            Policy Number : {file?.policy_number}
          </span>
          <span className="flex items-center">
            %:{" "}
            <span className="bg-green-200 my-1 mx-2 flex items-center justify-center text-green-500 rounded-full px-2 font-medium text-sm">
              {file?.offer_participant_percentage}%
            </span>
            <span>Share: {toMoney(file?.offer_amount)}</span>
          </span>
        </div>
        {/* <div className="w-20 flex"></div> */}
      </div>
    </li>
  );
};

export default Offer;
