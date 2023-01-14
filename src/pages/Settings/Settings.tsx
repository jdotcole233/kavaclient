import { clsx } from "@mantine/core";
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { subNavigation } from "../../utils";

type Props = {};

const Settings = (props: Props) => {
  return (
    <main className=" pb-10 lg:py-12 lg:px-8 w-full">
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
        <aside className="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
          <nav className="space-y-1">
            {subNavigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  clsx(
                    isActive
                      ? "bg-gray-50 text-orange-600 hover:bg-white"
                      : "text-gray-900 hover:text-gray-900 hover:bg-gray-50",
                    "group rounded-md px-3 py-2 flex items-center text-sm font-medium"
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <item.icon
                      className={clsx(
                        isActive
                          ? "text-orange-500"
                          : "text-gray-400 group-hover:text-gray-500",
                        "flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                      )}
                      aria-hidden="true"
                    />
                    <span className="truncate">{item.name}</span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        </aside>

        {/* Payment details */}

        <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9 w-full">
          <Outlet />
          {/* Plan */}
        </div>
      </div>
    </main>
  );
};

export default Settings;
