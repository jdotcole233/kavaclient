import React, { Fragment } from "react";
import { useLayoutProps } from "../../../layout/Provider/LayoutProvider";
import { classNames, tabs } from "../../../utils";
// import { useOfferProps } from "../Providers/OfferProvider";

const Tabs = () => {
  const { activeTab, setActiveTab } = useLayoutProps();
  return (
    <Fragment>
      <div className="mt-3 sm:mt-2">
        <div className="sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          <select
            id="tabs"
            name="tabs"
            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
            defaultValue={0}
            onChange={(e) => setActiveTab(e.target.value)}
            value={activeTab}
          >
            {tabs.map((el, key) => (
              <option value={key}>{el.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <div className="flex items-center border-b border-gray-200">
            <nav
              className="flex-1 -mb-px flex space-x-6 xl:space-x-8"
              aria-label="Tabs"
            >
              {tabs.map((tab, key) => (
                <a
                  key={tab.name}
                  href={tab.href}
                  aria-current={key === activeTab ? "page" : undefined}
                  onClick={() => setActiveTab(key)}
                  className={classNames(
                    key === activeTab
                      ? "border-green-500 text-green-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                    "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                  )}
                >
                  {tab.name}
                </a>
              ))}
            </nav>
            <div className="hidden ml-6 bg-gray-100 p-0.5 rounded-lg items-center sm:flex">
              <select
                id="tabs"
                name="tabs"
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
                defaultValue="Recently Viewed"
                onChange={(e) => setActiveTab(e.target.value)}
                value={activeTab}
              >
                {["2021", "2020", "2019"].map((el, key) => (
                  <option value={el}>{el}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Tabs;
