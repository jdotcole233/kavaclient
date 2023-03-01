import {
  BuildingOffice2Icon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/20/solid";
import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import { useAppSelector } from "../../app/hooks";

type Props = {};

const Profile = (props: Props) => {
  const { user } = useAppSelector((state) => state.auth);
  const { register } = useForm<any>({
    defaultValues: {
      first_name:
        user?.clientable?.__typename === "Reinsurer_representative"
          ? user?.clientable?.rep_first_name
          : user?.clientable?.assoc_first_name,
      last_name:
        user?.clientable?.__typename === "Reinsurer_representative"
          ? user?.clientable?.rep_last_name
          : user?.clientable?.assoc_last_name,
      email:
        user?.clientable?.__typename === "Reinsurer_representative"
          ? user?.clientable?.rep_email
          : user?.clientable?.assoc_email,
      primary_phone:
        user?.clientable?.__typename === "Reinsurer_representative"
          ? user?.clientable?.rep_primary_phonenumber
          : user?.clientable?.assoc_primary_phonenumber,
      secondary_phone:
        user?.clientable?.__typename === "Reinsurer_representative"
          ? user?.clientable?.rep_secondary_phonenumber
          : user?.clientable?.assoc_secondary_phonenumber,
      position: user?.clientable?.position,
    },
  });
  return (
    <Fragment>
      {/* <code>{JSON.stringify(user)}</code> */}
      <section className="flex bg-green-50 px-5">
        <div className="h-28 w-28 mr-7">
          <BuildingOffice2Icon className="text-green-600" />
        </div>
        <div className="w-full flex flex-col">
          <span className="text-green-800 font-medium text-3xl">
            {user?.clientable?.__typename === "Reinsurer_representative"
              ? user?.clientable?.rep_first_name +
              " " +
              user?.clientable?.rep_last_name
              : user?.clientable?.assoc_first_name +
              " " +
              user?.clientable?.assoc_last_name}
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
              {user?.email}
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
              {"NA"}
            </span>
          </div>
        </div>
      </section>

      <div className="overflow-hidden bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-base font-semibold leading-6 text-gray-900">Company Information</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Company name</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{user?.clientable?.__typename === "Reinsurer_representative" ? user?.clientable?.reinsurer?.re_company_name : ""}</dd>
            </div>
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Company email</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{user?.clientable?.__typename === "Reinsurer_representative" ? user?.clientable?.reinsurer?.re_company_email : ""}</dd>
            </div>
            <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Company website</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{user?.clientable?.__typename === "Reinsurer_representative" ? user?.clientable?.reinsurer?.re_company_website : ""}</dd>
            </div>
          </dl>
        </div>
      </div>


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
                    {...register("first_name", { required: "Required" })}
                    id="first-name"
                    readOnly
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
                    {...register("last_name", { required: "Required" })}
                    id="last-name"
                    readOnly
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
                    {...register("email", { required: "Required" })}
                    id="email-address"
                    readOnly
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
                    {...register("primary_phone", { required: "Required" })}
                    id="expiration-date"
                    autoComplete="cc-exp"
                    readOnly
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                    placeholder=""
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
                    {...register("secondary_phone", { required: "Required" })}
                    id="security-code"
                    readOnly
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
                    {...register("position", { required: "Required" })}
                    autoComplete="country"
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
