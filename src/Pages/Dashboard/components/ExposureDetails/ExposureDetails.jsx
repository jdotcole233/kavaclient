import React from "react";

const ExposureDetails = () => {
  return (
    <div className="h-full overflow-y-scroll">
      <div className="h-2/4 w-full bg-gray-300">
        <div className="flex justify-between p-4">
          <div className="">
            <span className="text-3xl font-medium">
              Total Exposure Breakdown
            </span>
          </div>
          <div className="">
            <select
              name=""
              className="bg-transparent border w-24 px-4 p-2 border-gray-600"
              id=""
            >
              <option value="USD">USD</option>
              <option value="GHC">GHC</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
          </div>
        </div>

        <div className="h-96"></div>
      </div>
    </div>
  );
};

export default ExposureDetails;
