import React, { Fragment, useState } from "react";
import { DocumentIcon, XIcon } from "@heroicons/react/outline";
import { useLayoutProps } from "../Provider/LayoutProvider";
import DocumentWrapper from "../../Components/DocumentWrapper";

const currentFile = {
  "Policy Number": "KEK-56348983",
  Currency: "GHC",
  Created: "June 8, 2020",
  Reinsured: "Kwame Owusu",
  Brokerage: "12.3%",
  Commission: "6.3%",
  NIC: "2.5%",
  "WIthholding tax": "3.1%",
};

const Details = () => {
  const { setSelectedOffer } = useLayoutProps();
  const [openCreditNote, setOpenCreditNote] = useState(false);
  return (
    <Fragment>
      <aside className="w-full lg:w-1/3 bg-white p-8 border-l border-gray-200 overflow-y-auto lg:block">
        <div className="pb-16 space-y-6">
          <div className="w-full flex justify-end ">
            <XIcon
              onClick={() => setSelectedOffer(undefined)}
              className="h-6 cursor-pointer w-6"
            />
          </div>
          <div className="flex ">
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-11 w-11 text-green-400"
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
            </div>
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Information</h3>
            <dl className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
              {Object.keys(currentFile).map((key) => (
                <div
                  key={key}
                  className="py-3 flex justify-between text-sm font-medium"
                >
                  <dt className="text-gray-500">{key}</dt>
                  <dd className="text-gray-900">{currentFile[key]}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Comment</h3>
            <div className="mt-2 flex items-center justify-between">
              <p className="text-sm text-gray-500 italic">
                Add a description to this image.
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-gray-900">Your document</h3>
            <ul className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
              <li className="py-3 flex justify-between items-center">
                <div className="flex items-center">
                  <DocumentIcon className="h-6 w-6" />
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
                  <button
                    type="button"
                    // onClick={() => setOpenCreditNote(true)}
                    className="ml-6 bg-white rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    download<span className="sr-only"> Closing Slip</span>
                  </button>
                </div>
              </li>
            </ul>
          </div>
          {/* <div>
            <h3 className="font-medium text-gray-900">Other participants</h3>
            <ul className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
              {currentFile.sharedWith.map((person) => (
                <li
                  key={person.id}
                  className="py-3 flex justify-between items-center"
                >
                  <div className="flex items-center">
                    <img
                      src={person.imageUrl}
                      alt=""
                      className="w-8 h-8 rounded-full"
                    />
                    <p className="ml-4 text-sm font-medium text-gray-900">
                      {person.name}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </aside>

      <DocumentWrapper
        show={openCreditNote}
        setShow={setOpenCreditNote}
      ></DocumentWrapper>
    </Fragment>
  );
};

export default Details;
