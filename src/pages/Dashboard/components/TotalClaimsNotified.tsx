import React, { useState } from "react";
import {
  BarChart,
  Bar,
  // Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { monthsWithCurrency } from "../../../utils";

const TotalClaimsNotified = () => {
  const [broker, setBroker] = useState("initialState");
  return (
    <div className="h-full overflow-y-scroll">
      <div className="h-2/4">
        <div className="p-4">
          <span className="text-3xl font-medium">Total Claims Notified</span>
        </div>
        <div className="grid grid-cols-3 gap-3 px-4">
          <div className="bg-gray-300 p-5">
            <div>
              <span className="text-2xl font-light">
                Visal Reinsurance Broker
              </span>
            </div>
            <div className="flex mt-5 items-center justify-between">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-9 w-9 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                  />
                </svg>
              </span>
              <span className="font-poppins text-3xl font-bold">14</span>
            </div>
          </div>
          <div className="bg-gray-300 p-5">
            <div>
              <span className="text-2xl font-light">
                KEK Reinsurance Broker
              </span>
            </div>
            <div className="flex mt-5 items-center justify-between">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-9 w-9 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                  />
                </svg>
              </span>
              <span className="font-poppins text-3xl font-bold">14</span>
            </div>
          </div>
          <div className="bg-gray-300 p-5">
            <div>
              <span className="text-2xl font-light">
                iRisk Reinsurance Broker
              </span>
            </div>
            <div className="flex mt-5 items-center justify-between">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-9 w-9 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                  />
                </svg>
              </span>
              <span className="font-poppins text-3xl font-bold">14</span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-2/4 w-full bg-gray-100">
        <div className="flex justify-between p-4">
          <div className="">
            <span className="font-thin text-3xl">Monthly Breakdown</span>
          </div>
          <div className="">
            <select
              name=""
              className="bg-transparent border mx-3 px-4 p-2 border-gray-600"
              id=""
              onChange={(e) => setBroker(e.target.value)}
              value={broker}
            >
              <option value="Visal Reinsurance Broker">
                Visal Reinsurance Broker
              </option>
              <option value="KEK Reinsurance Broker">
                KEK Reinsurance Broker
              </option>
              <option value="iRisk Reinsurance Broker">
                iRisk Reinsurance Broker
              </option>
            </select>
            <select
              name=""
              className="bg-transparent border px-4 p-2 border-gray-600"
              id=""
            >
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
            </select>
          </div>
        </div>

        <div className="h-96">
          <ResponsiveContainer height={350}>
            <BarChart
              width={500}
              height={350}
              data={monthsWithCurrency}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="usd" name="USD" fill="#EDD382" />
              <Bar
                dataKey="gbp"
                // label="Offers"
                name="GBP"
                fill="#FF521B"
              />
              <Bar dataKey="eur" name="EUR" fill="#FC9E4F" />
              <Bar dataKey="ghc" name="GHC" fill="#020122" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default TotalClaimsNotified;
