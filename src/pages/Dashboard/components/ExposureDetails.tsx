import React from "react";
import { useState } from "react";
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
import { PieChart, Pie } from "recharts";

import { monthsWithCurrency, renderActiveShape } from "../../../utils";

const data = [
  { name: "USD", value: 400, fill: "#EDD382" },
  { name: "EUR", value: 300, fill: "#FC9E4F" },
  { name: "GBP", value: 300, fill: "#FF521B" },
  { name: "GHC", value: 200, fill: "#020122" },
];

const ExposureDetails = () => {
  const [broker, setBroker] = useState("Visal Reinsurance Broker");
  const [activeIndex, setActiveIndex] = useState(0);
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
      <div className="flex  bg-gray-100 h-2/4 w-full">
        <div className="grid gap-4 grid-cols-1 w-full px-4 py-5">
          <div className="bg-white flex rounded-none w-full p-3">
            <div className="w-1/5 flex flex-col h-full items-center justify-start">
              <div className="h-36 w-36 bg-green-100 flex justify-center items-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-green-400 "
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
              <span className="text-lg font-medium">{broker}</span>
            </div>
            <div className="w-2/5 px-4 grid gap-4 grid-rows-4">
              {data.map((curr, currId) => (
                <div className="flex group  flex-row bg-gray-100 px-4 rounded-lg hover:bg-gray-300 cursor-pointer items-center">
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 group-hover:text-white text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="text-2xl group-hover:text-white font-medium text-gray-400 mx-2">
                      {curr.name}
                    </span>
                  </span>
                  <span className="mx-16 font-bold group-hover:text-white text-3xl">
                    {curr.value}
                  </span>
                </div>
              ))}
            </div>
            <div className="w-2/5">
              <ResponsiveContainer width="100%" height={390}>
                <PieChart height={400}>
                  <Pie
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape}
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    onMouseEnter={(_, index) => setActiveIndex(index)}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExposureDetails;
