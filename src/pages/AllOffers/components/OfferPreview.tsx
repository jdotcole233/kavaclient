/* eslint-disable react/jsx-no-target-blank */
import { Fragment, useState } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";

import PDF from "../../../assets/pdf.png";
import { BASE_URL } from "../../../constants";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { setSelectedOffer } from "../../../features/offers";
import DocumentWrapper from "../../../components/document-wrapper";
import { generateURlData } from "../../../utils";

const Details = () => {
  const { selectedOffer } = useAppSelector((state) => state.offers);
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const [openCreditNote, setOpenCreditNote] = useState(false);
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
                value={selectedOffer?.offer_detail?.currency}
              />
              <ValueX
                label="NIC"
                value={selectedOffer?.offer_detail?.currency}
              />
              <ValueX
                label="WIthholding Tax"
                value={selectedOffer?.offer_detail?.currency}
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
                  {/* <a
                    // type="button"
                    href={`${BASE_URL}/download/${btoa(
                      JSON.stringify({
                        broker: broker,
                        // reinsurer_id: selectedOffer?.reinsurer_id,
                        offer_id: selectedOffer?.offersoffer_id,
                      })
                    )}`}
                    target="_blank"
                    // onClick={() => setOpenCreditNote(true)}
                    className="ml-6 bg-white rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    download<span className="sr-only">Closing Slip</span>
                  </a> */}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </aside>

      <DocumentWrapper
        show={openCreditNote}
        setShow={setOpenCreditNote}
        url={`${BASE_URL}/generateClosing/${generateURlData({
          _id: selectedOffer?.offersoffer_id,
          _id_me: user?.id,
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
