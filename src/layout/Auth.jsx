import { useForm } from "react-hook-form";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
/* eslint-disable jsx-a11y/anchor-is-valid */
function Auth() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (values) => {};

  return (
    <div className="min-h-screen bg-white flex">
      <div className="hidden lg:block bg-white  relative w-0 flex-1">
        <AliceCarousel autoPlay autoPlayInterval="3000">
          <img
            className="h-screen w-full  sliderimg"
            src={
              "https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
            }
            alt=""
          />
          <img
            src={
              "https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
            }
            className="absolute inset-0 h-screen w-full object-cover sliderimg"
            alt=""
          />
          {/* <img src={image3} className="sliderimg" alt="" />
          <img src={image4} className="sliderimg" alt="" /> */}
        </AliceCarousel>
        {/* <img
          className="absolute inset-0 h-full w-full object-cover"
          src=
          alt=""
        /> */}
      </div>
      <div className="flex-1 bg-gray-50  flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <img
              className="h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark.svg?color=green&shade=700"
              alt="Workflow"
            />
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
            <span className={"text-gray-800"}>Get some text for here..</span>
          </div>

          <div className="mt-8">
            <div className="mt-6">
              <form onSubmit={handleSubmit(submitForm)} className="space-y-6">
                <div className="border border-gray-400 bg-white rounded-md px-3 py-3 shadow-sm focus-within:ring-1 focus-within:ring-green-600 focus-within:border-green-600">
                  <label
                    htmlFor="name"
                    className="block text-lg font-bold text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="block w-full border-0 p-0 mt-2 text-gray-900 placeholder-gray-600 focus:ring-0 focus:outline-none"
                    placeholder="Email here ... eg johndpe@gmail.com"
                  />
                </div>

                <div>
                  <button
                    type="submit"
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
