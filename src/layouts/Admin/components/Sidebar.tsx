import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { classNames, navigation } from "../../../utils";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { setMobileMenuOpen } from "../../../features/settings";
type Props = {};

const Sidebar = (props: Props) => {
  const { mobileMenuOpen } = useAppSelector((state) => state.settings);
  const dispatch = useAppDispatch();
  return (
    <Fragment>
      {/* Narrow sidebar */}
      <div className="hidden w-28 bg-green-700 h-full overflow-y-auto md:block">
        <div className="w-full h-full py-6 flex flex-col items-center">
          <div className="h-20 flex items-center">
            {/* <img className="h-8 w-auto" src={ComfyC} alt="Workflow" /> */}
          </div>
          <div className="flex-1 mt-6 w-full flex flex-col    px-2 space-y-1">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  classNames(
                    isActive
                      ? "bg-green-800 text-white"
                      : "text-indigo-100 hover:bg-green-800 hover:text-white",
                    "group w-full p-3 rounded-md flex flex-col items-center justify-center text-xs font-medium"
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <item.icon
                      className={classNames(
                        isActive
                          ? "text-white"
                          : "text-green-300 group-hover:text-white",
                        "h-6 w-6 "
                      )}
                      aria-hidden="true"
                    />
                    <span className="mt-2 text-center">{item.name}</span>
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 z-40 flex md:hidden"
          open={mobileMenuOpen}
          onClose={(value) => dispatch(setMobileMenuOpen(value))}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative max-w-xs w-full bg-green-700 pt-5 pb-4 flex-1 flex flex-col">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-1 right-0 -mr-14 p-1">
                  <button
                    type="button"
                    className="h-12 w-12 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white"
                    onClick={() => dispatch(setMobileMenuOpen(false))}
                  >
                    <XMarkIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Close sidebar</span>
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-shrink-0 px-4 flex items-center">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                  alt="Workflow"
                />
              </div>
              <div className="mt-5 flex-1 h-0 px-2 overflow-y-auto">
                <nav className="h-full flex flex-col">
                  <div className="space-y-1">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={({ isActive }) =>
                          classNames(
                            isActive
                              ? "bg-green-800 text-white"
                              : "text-indigo-100 hover:bg-green-800 hover:text-white",
                            "group py-2 px-3 rounded-md flex items-center text-sm font-medium"
                          )
                        }
                      >
                        {({ isActive }) => (
                          <>
                            <item.icon
                              className={classNames(
                                isActive
                                  ? "text-white"
                                  : "text-green-300 group-hover:text-white",
                                "mr-3 h-6 w-6"
                              )}
                              aria-hidden="true"
                            />
                            <span>{item.name}</span>
                          </>
                        )}
                      </NavLink>
                    ))}
                  </div>
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>
      {/* <div className="absolute hidden lg:block bottom-10">
        
      </div> */}
    </Fragment>
  );
};

export default Sidebar;
