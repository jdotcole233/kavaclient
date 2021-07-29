/* eslint-disable react/jsx-no-target-blank */
import React, { Fragment, useState } from "react";
import { XIcon } from "@heroicons/react/outline";
import { useLayoutProps } from "../Provider/LayoutProvider";
import DocumentWrapper from "../../Components/DocumentWrapper";
import ClosingSlip from "../../Pages/Offers/Previews/ClosingSlip";
import { baseURL } from "../../server";
import PDF from "../../assets/pdf.png";

const template = {
  "Policy number": "policy_number",
  Currency: "currency",
  "Created by": "employee",
  Reinsured: "insured_by",
  Brokerage: "brokerage_amount",
  Commission: "agreed_commission",
  NIC: "nic_levy",
  "WIthholding tax": "withholding_tax",
};

const Details = () => {
  const { selectedOffer, setSelectedOffer, activeTab } = useLayoutProps();
  const [openCreditNote, setOpenCreditNote] = useState(false);
  return (
    <Fragment>
      <aside className="w-full lg:w-1/3 bg-white p-8 border-l border-gray-200 overflow-y-auto lg:block">
        <div className="pb-16 space-y-6">
          <div className="w-full flex justify-end ">
            <div className="bg-red-600 flex items-center justify-center rounded-full h-9 w-9">
              <XIcon
                onClick={() => setSelectedOffer(undefined)}
                className="h-6 cursor-pointer w-6 text-white"
              />
            </div>
          </div>
          <div className="flex ">
            <div className="">
              <img src={PDF} className="h-11 w-11" alt="" />
            </div>
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Offer Details</h3>
            <dl className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
              {Object.entries(template).map((key) => (
                <div
                  key={key}
                  className="py-3 flex justify-between text-sm font-medium"
                >
                  <dt className="text-gray-500">{key[0]}</dt>
                  {key[1] === "employee" ? (
                    <dd className="text-gray-900">
                      {selectedOffer["employee_first_name"]}{" "}
                      {selectedOffer["employee_last_name"]}
                    </dd>
                  ) : (
                    <dd className="text-gray-900">{selectedOffer[key[1]]}</dd>
                  )}
                </div>
              ))}
            </dl>
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Comment</h3>
            <div className="mt-2 flex items-center justify-between">
              <p className="text-sm text-gray-500 italic">
                {selectedOffer?.offer_comment}
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Your document</h3>
            <ul className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
              <li className="py-3 flex justify-between items-center">
                <div className="flex items-center">
                  {/* <DocumentIcon className="h-6 w-6" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <p className="ml-4 text-sm font-medium text-gray-900">
                    Closing Slip
                  </p>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={() => setOpenCreditNote(true)}
                    className="ml-6 bg-white rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    view<span className="sr-only"> Closing Slip</span>
                  </button>
                  <a
                    // type="button"
                    href={`${baseURL}/download/${btoa(
                      JSON.stringify({
                        broker: activeTab,
                        reinsurer_id: selectedOffer?.reinsurer_id,
                        offer_id: selectedOffer?.offer_id,
                      })
                    )}`}
                    target="_blank"
                    // onClick={() => setOpenCreditNote(true)}
                    className="ml-6 bg-white rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    download<span className="sr-only"> Closing Slip</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </aside>

      <DocumentWrapper show={openCreditNote} setShow={setOpenCreditNote}>
        <ClosingSlip />
      </DocumentWrapper>
    </Fragment>
  );
};

export default Details;
