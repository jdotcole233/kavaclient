import React, { useState } from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";
import { renderActiveShape } from "../../../../utils";

const data = [
  { name: "Visal Reinsurance Broker", value: 400, fill: "#FF7F51" },
  { name: "Group B", value: 300, fill: "#4F000B" },
  { name: "Group C", value: 300, fill: "#FF9B54" },
  { name: "Group D", value: 200, fill: "#CE4257" },
];

const TotalRevenuePie = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="bg-white h-auto mt-4 shadow-md p-3">
      <div className="p-3 flex flex-col">
        <span className="text-2xl font-medium">Total Revenue overall</span>
        <span>
          Breakdown of the the total revenue into various brokers by percentage
        </span>
      </div>
      <div className="grid px-3 grid-cols-3">
        <div>
          <label htmlFor="" className="font-medium">
            Year
          </label>
          <select
            id="tabs"
            name="tabs"
            class="block w-full focus:ring-green-500 border  focus:border-green-500 border-gray-300 rounded-none"
          >
            <option>2019</option>
            <option>2020</option>
            <option>2021</option>
          </select>
        </div>
        <div>
          <label htmlFor="" className="font-medium">
            Month
          </label>
          <select
            id="tabs"
            name="tabs"
            class="block w-full focus:ring-green-500 border  focus:border-green-500 border-gray-300 rounded-none"
          >
            <option>Jan</option>
            <option>Feb</option>
            <option>Mar</option>
            <option>Apr</option>
            <option>May</option>
            <option>Jun</option>
            <option>Jul</option>
            <option>Aug</option>
            <option>Sep</option>
            <option>Oct</option>
            <option>Nov</option>
            <option>Dec</option>
          </select>
        </div>
        <div>
          <label htmlFor="" className="font-medium">
            Currency
          </label>
          <select
            id="tabs"
            name="tabs"
            class="block w-full focus:ring-green-500 border  focus:border-green-500 border-gray-300 rounded-none"
          >
            <option>GHC</option>
            <option>USD</option>
            <option>EUR</option>
            <option>GBP</option>
          </select>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={390}>
        <PieChart width={400} height={400}>
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
  );
};

export default TotalRevenuePie;
