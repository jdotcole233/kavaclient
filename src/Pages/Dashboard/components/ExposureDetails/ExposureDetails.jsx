import React from "react";

const ExposureDetails = () => {
  return (
    <div>
      <div className="h-96 w-full bg-gray-300">
        <div className="flex justify-between p-4">
          <div className="">
            <span className="text-3xl font-medium">
              Total Exposure Breakdown
            </span>
          </div>
          <div className="">
            <select
              name=""
              className="bg-transparent border w-24 px-4 border-gray-600"
              id=""
            >
              <option value="USD">USD</option>
              <option value="GHC">GHC</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExposureDetails;
