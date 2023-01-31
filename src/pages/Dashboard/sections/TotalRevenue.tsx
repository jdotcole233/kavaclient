/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Card,
  SelectBox,
  SelectBoxItem,
  Toggle,
  ToggleItem,
} from "@tremor/react";
import { useState } from "react";
import {
  // Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { months, years } from "../../../utils";

const TotalRevenue = () => {
  const [tab, setTab] = useState("month");
  const [types, setTypes] = useState("ALL");
  return (
    <div className="mt-4">
      <Card>
        <div className="h-auto py-5 ">
          <div className="p-3 flex flex-col">
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <span className="text-2xl font-semibold">Total Revenue</span>
                <span>Net Premium Earning from Comfy Broker network</span>
              </div>
              <div className="flex">
                <Toggle
                  defaultValue="year"
                  color="gray"
                  handleSelect={(value) => setTab(value)}
                >
                  <ToggleItem value="month" text="Month" />
                  <ToggleItem value="year" text="Year" />
                </Toggle>
              </div>
            </div>

            <div className="flex justify-between items-start py-2">
              <Toggle
                defaultValue={types}
                value={types}
                color="green"
                handleSelect={(value) => setTypes(value)}
              >
                <ToggleItem value="ALL" text="All" />
                <ToggleItem value="PAID" text="Paid" />
                <ToggleItem value="OUTSTANDING" text="Outstanding" />
              </Toggle>
              <SelectBox
                defaultValue={undefined}
                value={"USD"}
                onValueChange={undefined}
                placeholder="Select..."
                icon={undefined}
                maxWidth="max-w-min"
                marginTop="mt-0"
              >
                <SelectBoxItem value={"GHS"} text="GHS" />
                <SelectBoxItem value={"USD"} text="USD" />
                <SelectBoxItem value={"EUR"} text="EUR" />
                <SelectBoxItem value={"GBP"} text="GBP" />
              </SelectBox>
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
                fill="#B26E63"
                type="monotone"
              />
              <Bar
                dataKey="kekre"
                name="KEK Reinsurance Broker"
                fill="#9DA9A0"
                type="monotone"
              />
              <Bar
                dataKey="amt"
                name="IRISK Reinsurance Broker"
                fill="#CEC075"
                type="monotone"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};

export default TotalRevenue;
