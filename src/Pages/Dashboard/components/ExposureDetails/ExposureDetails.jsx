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
              <Bar dataKey="usd" name="USD" fill="#73AB84" />
              <Bar
                dataKey="gbp"
                // label="Offers"
                name="GBP"
                fill="#ADE1E5"
              />
              <Bar dataKey="eur" name="EUR" fill="#99D19C" />
              <Bar dataKey="ghc" name="GHC" fill="#99D19E" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ExposureDetails;
