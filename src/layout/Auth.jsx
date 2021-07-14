/* eslint-disable jsx-a11y/anchor-is-valid */
function Auth() {
  return (
    <div className="min-h-screen bg-white flex">
      <div className="hidden lg:block bg-white  relative w-0 flex-1">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
          alt=""
        />
        <div className="flex absolute inset-0 h-full items-start">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#fff"
              d="M0 160l8.6 26.7C17.1 213 34 267 51 266.7c17.6.3 35-53.7 52-85.4 17-32.3 34-42.3 51-32 17.4 10.7 35 42.7 52 58.7 16.9 16 34 16 51 26.7 17.3 10.3 34 32.3 52 0 16.7-31.7 34-117.7 51-128 17.1-10.7 34 53.3 51 64 17.6 10.3 35-31.7 52-42.7 17-11 34 11 51 37.3 17.4 26.7 35 58.7 52 48 16.9-10.3 34-64.3 51-80 17.3-16.3 34 5.7 52 5.4 16.7.3 34-21.7 51-37.4 17.1-16.3 34-26.3 51-32 17.6-5.3 35-5.3 52-5.3s34 0 51-5.3c17.4-5.7 35-15.7 52-5.4 16.9 10.7 34 42.7 51 64 17.3 21.7 34 31.7 52 53.4 16.7 21.3 34 53.3 51 69.3 17.1 16 34 16 51 0 17.6-16 35-48 52-90.7 17-42.3 34-96.3 51-117.3 17.4-21 35-11 52 37.3 16.9 47.7 34 133.7 51 176 17.3 42.7 34 42.7 52 32 16.7-10.3 34-32.3 42-42.6l9-10.7V0H0z"
            ></path>
          </svg>
        </div>
      </div>
      <div className="flex-1  flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <img
              className="h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-8">
            <div className="mt-6">
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                {/* <div className="space-y-1">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div> */}

                {/* <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot your password?
                    </a>
                  </div>
                </div> */}

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
