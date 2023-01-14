/* eslint-disable react/jsx-no-target-blank */
import { Fragment, useState } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";

import PDF from "../../../assets/pdf.png";
import { urls } from "../../../constants";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { setSelectedOffer } from "../../../features/offers";
import DocumentWrapper from "../../../components/document-wrapper";
import { generateURlData } from "../../../utils";
import numeral from "numeral";
import { BrokerTypes } from "../../../graphql/__generated__/globalTypes";

const Details = () => {
  const { selectedOffer, broker } = useAppSelector((state) => state.offers);
  const dispatch = useAppDispatch();
  const [openCreditNote, setOpenCreditNote] = useState(false);
  // console.log({
  //   _id: selectedOffer?.offersoffer_id,
  //   _id_me: user?.id,
  //   broker: broker,
  // });

  return (
    <Fragment>
      <aside className="w-full lg:w-1/3 bg-white p-8 border-l border-gray-200 overflow-y-auto lg:block">
        <div className="pb-16 space-y-6">
          <div className="w-full flex justify-end ">
            <div className="bg-red-600 flex items-center justify-center rounded-full h-9 w-9">
              <XMarkIcon
                onClick={() => dispatch(setSelectedOffer(null))}
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
              <ValueX
                label="Currency"
                value={selectedOffer?.offer_detail?.currency}
              />
              <ValueX
                label="Reinsured"
                value={selectedOffer?.offer_detail?.insured_by}
              />
              <ValueX
                label="Participation Percentage"
                value={`${selectedOffer?.offer_participant_percentage}%`}
              />
              <ValueX
                label="Commission"
                value={numeral(
                  selectedOffer?.offer_extra_charges?.commission_amount
                ).format("#,#.##")}
              />
              <ValueX
                label="NIC"
                value={numeral(
                  selectedOffer?.offer_extra_charges?.nic_levy_amount
                ).format("#,#.##")}
              />
              <ValueX
                label="WIthholding Tax"
                value={numeral(
                  selectedOffer?.offer_extra_charges?.withholding_tax_amount
                ).format("#,#.##")}
              />
            </dl>
          </div>
          {/* <div>
            <h3 className="font-medium text-gray-900">Comment</h3>
            <div className="mt-2 flex items-center justify-between">
              <p className="text-sm text-gray-500 italic">
                {selectedOffer?.offer?}
              </p>
            </div>
          </div> */}
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
                </div>
              </li>
              <li className="py-3 flex justify-between items-center">
                <div className="flex items-center">
                  {/* <DocumentIcon className="h-6 w-6" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-green-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                    />
                  </svg>
                  <p className="ml-4 text-sm font-medium text-gray-900">
                    Payments
                  </p>
                </div>
                <div>
                  <button
                    type="button"
                    // onClick={() => setOpenCreditNote(true)}
                    className="ml-6 bg-white rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    view<span className="sr-only">Payments</span>
                  </button>
                </div>
              </li>
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
                    Issue Guaranttee Note
                  </p>
                </div>
                <div>
                  <button
                    type="button"
                    // onClick={() => setOpenCreditNote(true)}
                    className="ml-6 bg-white rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    view<span className="sr-only">Issue Guaranttee Note</span>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </aside>

      <DocumentWrapper
        show={openCreditNote}
        setShow={setOpenCreditNote}
        url={`${
          urls[broker || BrokerTypes.KEK]
        }/generate_closing_slip/${generateURlData({
          offer_id: selectedOffer?.offersoffer_id,
          reinsurer_id: selectedOffer?.reinsurer?.reinsurer_id,
          // broker: broker,
        })}`}
      />
    </Fragment>
  );
};

export default Details;

export const ValueX = ({ label, value }: any) => (
  <div className="py-3 flex justify-between text-sm font-medium">
    <dt className="text-gray-500">{label}</dt>
    <dd className="text-gray-900">{value}</dd>
  </div>
);
