import React, { Fragment, PureComponent, useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { classNames, months } from "../../../../utils";

const TotalParticipations = () => {
  const [tab, setTab] = useState("month");
  return (
    <div className="h-auto py-5 bg-white shadow-md">
      <div className="p-3 flex flex-col">
        <div className="flex justify-between">
          <div className="">
            <span className="text-2xl font-semibold">
              Total Parrticipations
            </span>
          </div>
          <div className="flex">
            <div className="grid grid-cols-2">
              <div
                onClick={() => setTab("month")}
                className={classNames(
                  tab === "month"
                    ? "bg-green-400 cursor-pointer px-4 flex items-center text-white justify-center hover:bg-green-400 focus:bg-green-400 hover:text-white border border-green-600"
                    : "bg-gray-50 cursor-pointer px-4 flex items-center text-green-600 justify-center hover:bg-green-400 focus:bg-green-400 hover:text-white border border-green-600"
                )}
              >
                <span>Month</span>
              </div>
              <div
                onClick={() => setTab("year")}
                className={classNames(
                  tab === "year"
                    ? "bg-green-400 cursor-pointer px-4 flex items-center text-white justify-center hover:bg-green-400 focus:bg-green-400 hover:text-white border border-green-600"
                    : "bg-gray-50 cursor-pointer px-4 flex items-center text-green-600 justify-center hover:bg-green-400 focus:bg-green-400 hover:text-white border border-green-600"
                )}
              >
                <span>Year</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ResponsiveContainer height={350}>
        <BarChart
          width={500}
          height={350}
          data={months}
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
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TotalParticipations;
