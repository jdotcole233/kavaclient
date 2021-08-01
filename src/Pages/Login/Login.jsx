/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";
import { notification } from "antd";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import server from "../../server";
import { useAuthProcessProps } from "../../layout/Provider/AuthProcessProvider";
import Loader from "react-loader-spinner";
import Comfi from "../../assets/comfi 4.svg";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const history = useHistory();
  const { setCompany } = useAuthProcessProps();
  const { mutate, isLoading, isError } = useMutation(
    (data) => server.post("/verification", data),
    {
      onError: (er) => {
        console.log(er);
        notification.warning({
          message: "Whoops!",
          description: "Something went wrong",
        });
      },
      onSuccess: (data) => {
        setCompany(data.data);
        history.push("/auth/confirm");
      },
    }
  );

  const submitForm = (values) => mutate({ ...values });

  return (
    <Fragment>
      <div>
        <img className="h-24 w-auto" src={Comfi} alt="Workflow" />
        <Fragment>
          <h2 className="mt-6 text-3xl font-poppins font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <span className={"text-gray-800 font-poppins"}>
            Get some text for here..
          </span>
        </Fragment>
      </div>
      <div className="mt-8">
        <div className="mt-6">
          <form onSubmit={handleSubmit(submitForm)} className="space-y-6">
            {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
            {isError && (
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    {/* <!-- Heroicon name: solid/exclamation --> */}
                    <svg
                      className="h-5 w-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      <a
                        href="#"
                        className="font-medium underline text-yellow-700 hover:text-yellow-600"
                      >
                        {"Something went wrong"}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div
              className={`border border-${
                errors && errors.email ? "red" : "gray"
              }-400 bg-white rounded-md px-3 py-3 shadow-sm focus-within:ring-1 focus-within:ring-green-600 focus-within:border-green-600`}
            >
              <label
                htmlFor="name"
                className={`block text-lg font-bold text-${
                  errors && errors.email ? "red" : "gray"
                }-700`}
              >
                Email
              </label>
              <input
                type="email"
                // name="email"
                {...register("email", { required: "Required" })}
                id="name"
                className="block w-full border-0 p-0 mt-2 text-gray-900 placeholder-gray-600 focus:ring-0 focus:outline-none"
                placeholder="Email here ... eg johndpe@gmail.com"
              />
            </div>

            <div>
              {isLoading && (
                <div className="flex justify-center w-full">
                  <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={30}
                    width={30}
                    //   timeout={3000} //3 secs
                  />
                </div>
              )}
              {!isLoading && (
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex justify-center py-2 px-4 border bg-white  rounded-md shadow-sm text-sm transform transition duration-200 font-medium text-green-600 hover:text-white border-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>{" "}
                  next
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
