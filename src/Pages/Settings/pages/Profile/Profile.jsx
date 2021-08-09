import React, { Fragment } from "react";
import { QuestionMarkCircleIcon } from "@heroicons/react/solid";
import { OfficeBuildingIcon } from "@heroicons/react/outline";
import { useAdminProps } from "../../../../layout/Provider/AdminProvider";

const Profile = () => {
  const { company, user } = useAdminProps();
  return (
    <Fragment>
      {/* <code>{JSON.stringify(user)}</code> */}
      <section className="flex bg-green-50 px-5">
        <div className="h-28 w-28 mr-7">
          <OfficeBuildingIcon className="text-green-600" />
        </div>
        <div className="w-full flex flex-col">
          <span className="text-green-800 font-medium text-3xl">
            {company.re_company_name}
          </span>
          <div className="flex flex-col">
            <span className="mr-7 flex flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-4 text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              {company.re_company_email}
            </span>
            <span className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-4 text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              {company.re_company_website ?? "NA"}
            </span>
          </div>
        </div>
      </section>
      <section aria-labelledby="payment-details-heading">
        <form action="#" method="POST">
          <div className="shadow sm:rounded-md sm:overflow-hidden">
            <div className="bg-white py-6 px-4 sm:p-6">
              <div>
                <h2
                  id="payment-details-heading"
                  className="text-lg leading-6 font-medium text-gray-900"
                >
                  Profile Details
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  The details below is the details given to the corresponding
                  brokers you have had an encounter with. If you have any issue
                  with it please contact them to have it changed for you
                </p>
              </div>

              <div className="mt-6 grid grid-cols-4 gap-6">
                <div className="col-span-4 sm:col-span-2">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    readOnly
                    defaultValue={user?.rep_first_name}
                    autoComplete="cc-given-name"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                  />
                </div>

                <div className="col-span-4 sm:col-span-2">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    readOnly
                    defaultValue={user?.rep_last_name}
                    autoComplete="cc-family-name"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                  />
                </div>

                <div className="col-span-4 sm:col-span-2">
                  <label
                    htmlFor="email-address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <input
                    type="text"
                    name="email-address"
                    id="email-address"
                    readOnly
                    defaultValue={user?.rep_email}
                    autoComplete="email"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                  />
                </div>

                <div className="col-span-4 sm:col-span-2">
                  <label
                    htmlFor="expiration-date"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Primary Phone
                  </label>
                  <input
                    type="text"
                    name="expiration-date"
                    id="expiration-date"
                    autoComplete="cc-exp"
                    readOnly
                    defaultValue={user?.rep_primary_phonenumber}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                    placeholder="MM / YY"
                  />
                </div>

                <div className="col-span-4 sm:col-span-2">
                  <label
                    htmlFor="security-code"
                    className="flex items-center text-sm font-medium text-gray-700"
                  >
                    <span>Secondary Phone</span>
                    <QuestionMarkCircleIcon
                      className="ml-1 flex-shrink-0 h-5 w-5 text-gray-300"
                      aria-hidden="true"
                    />
                  </label>
                  <input
                    type="text"
                    name="security-code"
                    id="security-code"
                    readOnly
                    defaultValue={user?.rep_secondary_phonenumber ?? "NA"}
                    autoComplete="cc-csc"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                  />
                </div>

                <div className="col-span-4 sm:col-span-2">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Position
                  </label>
                  <select
                    id="country"
                    name="country"
                    autoComplete="country"
                    readOnly
                    defaultValue={user?.position}
                    className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                  >
                    <option value="Underwriter">Underwriter</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                disabled
                type="submit"
                className="bg-green-800 border border-transparent rounded-none shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </section>
    </Fragment>
  );
};

export default Profile;
