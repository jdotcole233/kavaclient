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
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="visalre"
                name="Visal Reinsurance Broker"
                fill="#73AB84"
              />
              <Bar
                dataKey="kekre"
                // label="Offers"
                name="KEK Reinsurance Broker"
                fill="#ADE1E5"
              />
              <Bar
                dataKey="iriskre"
                name="KEK Reinsurance Broker"
                fill="#99D19C"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ExposureDetails;
