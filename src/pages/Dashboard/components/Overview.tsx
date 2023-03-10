import { DonutChart, SelectBox, Title, SelectBoxItem } from "@tremor/react";
import { SideSheet } from "evergreen-ui";
import { Fragment, useState } from "react";
import { stocks } from "../../../utils";
import { valueFormatter } from "../sections/TotalRevenuePie";
import ExposureDetails from "./ExposureDetails";
import TotalClaimsNotified from "./TotalClaimsNotified";
import TotalReserversDetails from "./TotalReserversDetails";

type Props = {};

const Overview = (props: Props) => {
  const [showExposureDrawer, setShowExposureDrawer] = useState(false);
  const [showTotalRerves, setShowTotalRerves] = useState(false);
  const [showTotalClaimsNotified, setShowTotalClaimsNotified] = useState(false);
  return (
    <Fragment>
      <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-2 items-start">
        <div className="bg-white overflow-hidden shadow rounded-none">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 text-blue-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <Title>Current total exposure</Title>
                  <p className="text-gray-400">Top 5 classes of business</p>
                </dl>
              </div>
              <SelectBox
                defaultValue={undefined}
                value={"USD"}
                onValueChange={undefined}
                placeholder="Select..."
                icon={undefined}
                maxWidth="max-w-0"
                marginTop="mt-0"
              >
                <SelectBoxItem value={"GHS"} text="GHS" />
                <SelectBoxItem value={"USD"} text="USD" />
                <SelectBoxItem value={"EUR"} text="EUR" />
                <SelectBoxItem value={"GBP"} text="GBP" />
              </SelectBox>
            </div>
            <DonutChart
              data={stocks}
              showAnimation={false}
              category="value"
              dataKey="name"
              valueFormatter={valueFormatter}
              marginTop="mt-6"
            />
          </div>
          <div className="bg-cool-gray-50 px-5 py-3">
            <div className="text-sm leading-5">
              <button
                onClick={() => setShowExposureDrawer(true)}
                className="font-medium text-purple-600 hover:text-purple-900 focus:outline-none transition ease-in-out duration-150"
              >
                View more
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-none">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-full bg-green-100 text-green-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm leading-5 font-light text-cool-gray-900 truncate">
                    Total Claims Notified
                  </dt>
                  <dd>
                    <div className="text-lg leading-7 font-medium text-cool-gray-900">
                      14
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
            <DonutChart
              data={stocks}
              showAnimation={false}
              category="value"
              variant="pie"
              dataKey="name"
              valueFormatter={valueFormatter}
              marginTop="mt-6"
            />
          </div>
          <div className="bg-cool-gray-50 px-5 py-3">
            <div className="text-sm leading-5">
              <button
                onClick={() => setShowTotalClaimsNotified(true)}
                className="font-medium text-purple-600 hover:text-purple-900 focus:outline-none transition ease-in-out duration-150"
              >
                View more
              </button>
            </div>
          </div>
        </div>

      </div>

      <SideSheet
        isShown={showExposureDrawer}
        onCloseComplete={() => setShowExposureDrawer(false)}
        width={1200}
      >
        <ExposureDetails />
      </SideSheet>

      <SideSheet
        isShown={showTotalClaimsNotified}
        onCloseComplete={() => setShowTotalClaimsNotified(false)}
        width={1200}
      >
        <TotalClaimsNotified />
      </SideSheet>

      <SideSheet
        isShown={showTotalRerves}
        onCloseComplete={() => setShowTotalRerves(false)}
        width={1200}
      >
        <TotalReserversDetails />
      </SideSheet>
    </Fragment>
  );
};

export default Overview;
