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
import { classNames, months, years } from "../../../../utils";

const TotalParticipations = () => {
  const [tab, setTab] = useState("month");
  return (
    <div className="h-auto py-5 bg-white shadow-md">
      <div className="p-3 flex flex-col">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-semibold">
              Total Parrticipations
            </span>
            <span>
              Detailed description of your participations with various broker
              firms
            </span>
          </div>
          <div className="flex">
            <div className="grid h-7 grid-cols-2">
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
          data={tab === "month" ? months : years}
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
          <Bar dataKey="kekre" name="KEK Reinsurance Broker" fill="#ADE1E5" />
          <Bar dataKey="iriskre" name="KEK Reinsurance Broker" fill="#99D19C" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TotalParticipations;
