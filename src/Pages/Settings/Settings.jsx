import React, { Suspense } from "react";
import { classNames, subNavigation } from "../../utils";

import { Link, Route } from "react-router-dom";

const Profile = React.lazy(() => import("./pages/Profile"));
const Account = React.lazy(() => import("./pages/Account"));

const Settings = () => {
  return (
    <main className="max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8">
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
        <aside className="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
          <nav className="space-y-1">
            {subNavigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={classNames(
                  item.current
                    ? "bg-gray-50 text-orange-600 hover:bg-white"
                    : "text-gray-900 hover:text-gray-900 hover:bg-gray-50",
                  "group rounded-md px-3 py-2 flex items-center text-sm font-medium"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                <item.icon
                  className={classNames(
                    item.current
                      ? "text-orange-500"
                      : "text-gray-400 group-hover:text-gray-500",
                    "flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                  )}
                  aria-hidden="true"
                />
                <span className="truncate">{item.name}</span>
              </Link>
            ))}
          </nav>
        </aside>

        {/* Payment details */}

        <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
          <Suspense fallback={<h1>Loading</h1>}>
            <Route path="/app/settings/" exact component={Profile} />
            <Route path="/app/settings/account" component={Account} />
          </Suspense>
          {/* Plan */}
        </div>
      </div>
    </main>
  );
};

export default Settings;
