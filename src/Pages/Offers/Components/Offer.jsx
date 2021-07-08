import { DocumentTextIcon } from "@heroicons/react/outline";
import React from "react";
import { useLayoutProps } from "../../../layout/Provider/LayoutProvider";
// import { classNames } from "../../../utils";

const Offer = ({ file = {} }) => {
  const { setSelectedOffer } = useLayoutProps();
  return (
    <li
      onClick={() => setSelectedOffer(file)}
      key={file.name}
      className="relative cursor-pointer"
    >
      <div className="bg-white focus:border-indigo-600 border shadow-md flex p-3">
        <div className="w-16">
          <DocumentTextIcon className="h-11 w-11 text-green-600" />
        </div>
        <div className="w-auto flex-1 items-start flex flex-col">
          <span className="font-semibold">{file?.Reinsured}</span>
          <span className="text-gray-600 font-thin">#KEK-56348983</span>
          <span className="bg-green-200 my-1 flex items-center justify-center text-green-500 rounded-full px-2 font-medium text-sm">
            11.3%
          </span>
        </div>
        {/* <div className="w-20 flex"></div> */}
      </div>
    </li>
  );
};

export default Offer;
