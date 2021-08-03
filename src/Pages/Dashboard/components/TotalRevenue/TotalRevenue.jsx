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

const TotalRevenue = () => {
  const [tab, setTab] = useState("month");
  return (
    <div>
      <div className="h-auto py-5 bg-white shadow-md">
        <div className="p-3 flex flex-col">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <span className="text-2xl font-semibold">Total Revenue</span>
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

          <div>
            <div class="sm:hidden">
              <label for="tabs" class="sr-only">
                Select a tab
              </label>
              <select
                id="tabs"
                name="tabs"
                class="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
              >
                <option>My Account</option>

                <option>Company</option>

                <option selected>Team Members</option>

                <option>Billing</option>
              </select>
            </div>
            <div class="hidden sm:block">
              <nav class="flex space-x-4" aria-label="Tabs">
                {/* <!-- Current: "bg-indigo-100 text-indigo-700", Default: "text-gray-500 hover:text-gray-700" --> */}
                <a
                  href="#"
                  class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md"
                >
                  My Account
                </a>

                <a
                  href="#"
                  class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md"
                >
                  Company
                </a>

                <a
                  href="#"
                  class="bg-indigo-100 text-indigo-700 px-3 py-2 font-medium text-sm rounded-md"
                  aria-current="page"
                >
                  Team Members
                </a>

                <a
                  href="#"
                  class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm rounded-md"
                >
                  Billing
                </a>
              </nav>
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
            <Bar
              dataKey="iriskre"
              name="KEK Reinsurance Broker"
              fill="#99D19C"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TotalRevenue;
