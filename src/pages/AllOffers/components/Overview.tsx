import React from "react";

type StatsProp = {
  name: string;
  description?: string;
  value: any;
};

type Props = {
  stats: StatsProp[];
};
// const stats = [
//   { name: "Total Subscribers", stat: "" },
//   { name: "Avg. Open Rate", stat: "" },
//   { name: "Avg. Click Rate", stat: "" },
//   { name: "Avg. Click Rate", stat: "" },
// ];
const Overview = ({ stats }: Props) => {
  return (
    <div>
      <h3 className="text-lg font-medium leading-6 text-gray-900">
        Last 30 days
      </h3>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.name}
            className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
          >
            <dt className="truncate text-sm font-medium text-gray-500">
              {item.name}
            </dt>
            <p className="truncate text-sm font-medium text-gray-300">
              {item.description}
            </p>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default Overview;
