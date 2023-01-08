/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment, SetStateAction, useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { setActiveBroker, setSelectedOffer } from "../features/offers";
import { BrokerTypes } from "../graphql/__generated__/globalTypes";
import { classNames, tabs as _tabs } from "../utils";
// import { useOfferProps } from "../Providers/OfferProvider";

export type iTab = {
  value: any;
  label: string;
};

type TabsProps = {
  setYear: React.Dispatch<SetStateAction<string>>;
  setActiveTab: React.Dispatch<SetStateAction<any>>;
  year: string;
  activeTab: string;
  tabs?: any[];
};

const Tabs = ({
  setYear,
  year,
  setActiveTab,
  activeTab,
  tabs = _tabs,
}: TabsProps) => {
  //   const { linked_to } = useAdminProps();
  const dispatch = useAppDispatch();

  const hanleBrokerSelect = (tab: BrokerTypes) => {
    setActiveTab(tab);
    dispatch(setActiveBroker(tab));
  };

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
            onChange={(e) => hanleBrokerSelect(e.target.value as BrokerTypes)}
            value={activeTab}
          >
            {tabs
              //   .filter((el) => linked_to?.includes(el.href))
              .map((el, key) => (
                <option key={key} value={el.href}>
                  {el.name}
                </option>
              ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <div className="flex items-center border-b border-gray-200">
            <nav
              className="flex-1 -mb-px flex space-x-6 xl:space-x-8"
              aria-label="Tabs"
            >
              {tabs
                // .filter((el) => linked_to?.includes(el.href))
                .map((tab, key) => (
                  <span
                    key={tab.name}
                    // href={tab.href}
                    // aria-current={key === activeTab ? "page" : undefined}
                    onClick={() => hanleBrokerSelect(tab.href)}
                    className={classNames(
                      tab.href === activeTab
                        ? "border-green-500 text-green-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                      "whitespace-nowrap py-4 px-1 border-b-2 font-medium cursor-pointer text-sm"
                    )}
                  >
                    {tab.name}
                  </span>
                ))}
            </nav>
            <div className="hidden ml-6 bg-gray-100 p-0.5 rounded-lg items-center sm:flex">
              <select
                // id="tabs"
                // name="tabs"
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
                defaultValue="Recently Viewed"
                onChange={(e) => setYear(e.target.value)}
                value={year}
              >
                {["2021", "2020", "2019"].map((el, key) => (
                  <option key={key} value={el}>
                    {el}
                  </option>
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
