/* eslint-disable jsx-a11y/anchor-is-valid */
import { useMutation } from "@apollo/client";
import { Fragment } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { userLogin } from "../../graphql/mutations/auth";
import {
  Login,
  LoginVariables,
  Login_login,
} from "../../graphql/mutations/__generated__/Login";
// import Comfi from "../../assets/comfi 4.svg";
import { showNotification, updateNotification } from "@mantine/notifications";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { authenticate } from "../../features/users";

const LoginScreen = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginVariables>();
  const [login, { loading }] = useMutation<Login, LoginVariables>(userLogin);

  const onSubmit: SubmitHandler<LoginVariables> = (data) => {
    console.log(data);
    showNotification({
      id: "login",
      loading: true,
      title: "Logging in",
      message: "Data will be loaded in 3 seconds, you cannot close this yet",
      autoClose: false,
      disallowClose: true,
    });
    login({ variables: data })
      .then((res) => {
        dispatch(authenticate(res.data?.login as Login_login));
        navigate("/app", { replace: true });
        updateNotification({
          id: "login",
          title: "Success",
          message: "Login Successful",
          color: "blue",
        });
      })
      .catch(() => {
        updateNotification({
          id: "login",
          title: "Error",
          message: "The user credentials were incorrect",
          color: "red",
        });
      });
  };

  return (
    <Fragment>
      <div>
        {/* <img className="h-24 w-auto" src={Comfi} alt="Workflow" /> */}
        <Fragment>
          <h2 className="mt-6 text-3xl font-medium text-gray-900">
            Sign in to your account
          </h2>
          {/* <span className={"text-gray-800 font-poppins"}>
            Get some text for here..
          </span> */}
        </Fragment>
      </div>
      <div className="mt-8">
        <div className="mt-6">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            {/* <!-- This example requires Tailwind CSS v2.0+ --> */}

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

            <div>
              <div className="flex justify-between">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
              </div>
              <div className="mt-1">
                <input
                  type="email"
                  {...register("input.username", { required: "Required" })}
                  id="email"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="you@example.com"
                  aria-describedby="email-optional"
                />
                {errors?.input?.username && (
                  <p className="text-red-400">
                    {errors?.input?.username?.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <div className="flex justify-between">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
              </div>
              <div className="mt-1">
                <input
                  type="password"
                  {...register("input.password", { required: "Required" })}
                  id="email"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="***********"
                  aria-describedby="email-optional"
                />
                {errors?.input?.password && (
                  <p className="text-red-400">
                    {errors?.input?.password?.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-2 disabled:bg-gray-500 px-4 border bg-white  rounded-md shadow-sm text-sm transform transition duration-200 font-medium text-green-600 hover:text-white border-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
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
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginScreen;
