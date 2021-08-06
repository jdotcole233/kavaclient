import React from "react";
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
import { months, monthsWithCurrency } from "../../../../utils";

const ExposureDetails = () => {
  return (
    <div className="h-full overflow-y-scroll">
      <div className="h-2/4 w-full bg-gray-100">
        <div className="p-4">
          <span className="text-3xl font-medium">Total Exposure Breakdown</span>
        </div>
        <div className="flex justify-between p-4">
          <div className="">
            <span className="font-thin text-3xl">Monthly Breakdown</span>
          </div>
          <div className="">
            <select
              name=""
              className="bg-transparent border mx-3 px-4 p-2 border-gray-600"
              id=""
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
              <Bar dataKey="usd" name="USD" fill="#8D918B" />
              <Bar
                dataKey="gbp"
                // label="Offers"
                name="GBP"
                fill="#AD9B9A"
              />
              <Bar dataKey="eur" name="EUR" fill="#C76D7E" />
              <Bar dataKey="ghc" name="GHC" fill="#E85D75" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="flex  bg-gray-600 h-2/4 w-full">
        <div className="grid gap-4 grid-cols-1 w-full px-4 py-5">
          <div className="bg-white rounded-lg w-full p-3">
            <div className="w-1/5 flex flex-col h-full items-center justify-start">
              <div className="h-36 w-36 bg-gray-200 flex justify-center items-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-gray-400 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                  />
                </svg>
              </div>
              <span className="text-lg font-medium">
                Visal Reinsurance Brokers
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExposureDetails;
