import React, { Fragment, useState } from "react";
import { DocumentIcon, XIcon } from "@heroicons/react/outline";
import { useLayoutProps } from "../Provider/LayoutProvider";
import DocumentWrapper from "../../Components/DocumentWrapper";

const currentFile = {
  Currency: "IMG_4985.HEIC",
  size: "3.9 MB",
  source:
    "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  information: {
    Currency: "GHC",
    Created: "June 8, 2020",
    "Policy Number": "KEK-56348983",
    Insurer: "Kwame Owusu",
    Brokerage: "12.3%",
    Commission: "6.3%",
    NIC: "2.5%",
    "WIthholding tax": "3.1%",
  },
  sharedWith: [
    {
      id: 1,
      name: "Aimee Douglas",
      imageUrl:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=1024&h=1024&q=80",
    },
    {
      id: 2,
      name: "Andrea McMillan",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ],
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
              {Object.keys(currentFile.information).map((key) => (
                <div
                  key={key}
                  className="py-3 flex justify-between text-sm font-medium"
                >
                  <dt className="text-gray-500">{key}</dt>
                  <dd className="text-gray-900">
                    {currentFile.information[key]}
                  </dd>
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
            <h3 className="font-medium text-gray-900">Your documents</h3>
            <ul className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
              {/* <li className="py-3 flex justify-between items-center">
                <div className="flex items-center">
                  <DocumentIcon className="h-6 w-6" />
                  <p className="ml-4 text-sm font-medium text-gray-900">
                    Credit Note
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpenCreditNote(true)}
                  className="ml-6 bg-white rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  view<span className="sr-only"> Credit Note</span>
                </button>
              </li>
              <li className="py-3 flex justify-between items-center">
                <div className="flex items-center">
                  <DocumentIcon className="h-6 w-6" />
                  <p className="ml-4 text-sm font-medium text-gray-900">
                    Debit Note
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpenCreditNote(true)}
                  className="ml-6 bg-white rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  view<span className="sr-only"> Debit Note</span>
                </button>
              </li> */}
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
                    onClick={() => setOpenCreditNote(true)}
                    className="ml-6 bg-white rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    view<span className="sr-only"> Closing Slip</span>
                  </button>
                </div>
              </li>
            </ul>
          </div>
          <div>
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
          </div>
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
