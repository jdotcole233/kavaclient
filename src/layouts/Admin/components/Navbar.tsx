import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import { setMobileMenuOpen } from "../../../features/settings";
import { classNames, getUserInitials, userNavigation } from "../../../utils";
import { CornerDialog } from "evergreen-ui";
import { Bars3Icon } from "@heroicons/react/24/solid";

type Props = {};

const Navbar = (props: Props) => {
  const [showSignOutDialog, setShowSignOutDialog] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <Fragment>
      <header className="w-full">
        <div className="relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 shadow-sm flex">
          <button
            type="button"
            className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
            onClick={() => dispatch(setMobileMenuOpen(true))}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 flex justify-between px-4 sm:px-6">
            <div className="flex-1 flex">
              <form className="w-full flex md:ml-0" action="#" method="GET">
                <label htmlFor="search-field" className="sr-only">
                  Search all files
                </label>
                <div className="relative w-full text-gray-400 focus-within:text-gray-600"></div>
              </form>
            </div>
            <div className="ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6">
              {/* Profile dropdown */}
              <Menu as="div" className="relative flex-shrink-0">
                {({ open }) => (
                  <>
                    <div>
                      <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                        <span className="sr-only">Open user menu</span>
                        <div className="h-8 w-8 font-bold text-green-800 flex items-center justify-center bg-green-200 rounded-full">
                          {getUserInitials({})}
                        </div>
                        {/* <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                          alt=""
                        /> */}
                      </Menu.Button>
                    </div>
                    <Transition
                      show={open}
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items
                        static
                        className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                      >
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <NavLink
                                to={item.href}
                                onClick={
                                  item.name === "Sign out"
                                    ? () => setShowSignOutDialog(true)
                                    : () => {}
                                }
                                className={({ isActive }) =>
                                  classNames(
                                    isActive ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )
                                }
                              >
                                {item.name}
                              </NavLink>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>

              {/* <button
                type="button"
                className="flex bg-green-600 p-1 rounded-full items-center justify-center text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                <PlusIconOutline className="h-6 w-6" aria-hidden="true" />
                <span className="sr-only">Add file</span>
              </button> */}
            </div>
          </div>
        </div>
      </header>

      <CornerDialog
        title="Are you sure you want to sign out ?"
        isShown={showSignOutDialog}
        onCloseComplete={() => setShowSignOutDialog(false)}
        confirmLabel="Signout"
        intent="danger"
        cancelLabel="Cancel"
        onConfirm={() => {}}
      >
        This action would stop every activity and lock you out of the account.
        Do you want to proceed with this ?
      </CornerDialog>
    </Fragment>
  );
};

export default Navbar;
