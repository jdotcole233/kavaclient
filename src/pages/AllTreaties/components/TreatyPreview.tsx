import { XMarkIcon } from "@heroicons/react/20/solid";
import { Fragment, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
// import DocumentWrapper from "../../../components/document-wrapper";
// import { urls } from "../../../constants";
import { setSelectedTreaty } from "../../../features/treaty";
// import { BrokerTypes } from "../../../graphql/__generated__/globalTypes";
// import { generateURlData } from "../../../utils";
import { ValueX } from "../../AllOffers/components/OfferPreview";
import PDF from "../../../assets/pdf.png";
import { BrokerTypes } from "../../../graphql/__generated__/globalTypes";
import DocumentWrapper from "../../../components/document-wrapper";
import { generateURlData } from "../../../utils";
import { urls } from "../../../constants";
import _ from "lodash";

type Props = {};

const TreatyPreview = (props: Props) => {
  const { selectedTreaty } = useAppSelector((state) => state.treaty);
  const { broker } = useAppSelector((state) => state.offers);
  const dispatch = useAppDispatch();
  const [openCreditNote, setOpenCreditNote] = useState(false);
  // console.log({
  //   _id: selectedTreaty?.offersoffer_id,
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
                onClick={() => dispatch(setSelectedTreaty(null))}
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
            <h3 className="font-medium text-gray-900">Treaty Details</h3>
            <dl className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
              <ValueX label="REF#" value={selectedTreaty?.treaty_reference} />
              <ValueX label="Treaty Name" value={selectedTreaty?.treaty_name} />
              <ValueX label="Currency" value={selectedTreaty?.currency} />
              <ValueX
                label="Reinsured"
                value={selectedTreaty?.insurance_company_name}
              />
              <ValueX
                label="Participation Percentage"
                value={`${selectedTreaty?.treaty_participation_percentage}%`}
              />
            </dl>
          </div>
          {/* <div>
              <h3 className="font-medium text-gray-900">Comment</h3>
              <div className="mt-2 flex items-center justify-between">
                <p className="text-sm text-gray-500 italic">
                  {selectedTreaty?.offer?}
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
            </ul>
          </div>
        </div>
      </aside>

      <DocumentWrapper
        show={openCreditNote}
        setShow={setOpenCreditNote}
        url={`${
          urls[broker || BrokerTypes.KEK]
        }/treatyCreditNotes/${generateURlData(
          selectedTreaty?.treaty_type === "PROPORTIONAL"
            ? {
                participant_id: selectedTreaty?.participant_id,
                treaty_account_id: selectedTreaty?.treaty_account_id,
                type: 0,
                emp_id: "",
                broker: broker,
                treaty_type: "PROPORTIONAL",
              }
            : {
                participant_id: selectedTreaty?.participant_id,
                limit: _.last(selectedTreaty?.layer_limit)?.limit,
                layer: selectedTreaty?.layer_limit?.length,
                uuid: _.last(selectedTreaty?.layer_limit)?.uuid,
                m_and_d_premium: _.last(selectedTreaty?.layer_limit)
                  ?.m_and_d_premium,
                total_participation_percentage:
                  selectedTreaty?.total_participation_percentage,
                installment_type: _.last(selectedTreaty?.layer_limit)
                  ?.installment_type,
                broker: broker,
                treaty_type: "NONPROPORTIONAL",
              }
        )}`}
      />
    </Fragment>
  );
};

export default TreatyPreview;
