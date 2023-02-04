import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import _ from "lodash";
import React, {
  Fragment,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import PageLoader from "../Loader";
import { TableColumn, TableData, TColumn } from "../../utils/types";
import { clsx } from "@mantine/core";

type Props = {
  columns: TableColumn<TColumn>;
  data: TableData<any>;
  setSelected: React.Dispatch<React.SetStateAction<TableData<any>>>;
  selected: TableData<any>;
  loading: boolean;
  error: any;
  setNumberOfRows: React.Dispatch<React.SetStateAction<number>>;
  numberOfRows: number;
  search?: Function;
  searchBy?: string;
  refresh?: Function;
  setSearchBy?: React.Dispatch<React.SetStateAction<string>>;
  bulkAction?: React.ReactNode;
  searchKeyData?: Array<{ value: any; name: string }>;
  pagination?: React.ReactNode;
  reload?: Function;
};

const rowsToShow = [
  { name: "Show 10 items", value: 10 },
  { name: "Show 20 items", value: 20 },
  { name: "Show 30 items", value: 30 },
  { name: "Show 50 items", value: 50 },
  { name: "Show 100 items", value: 100 },
];

const TableWithCheckbox = ({
  columns,
  data,
  selected,
  setSelected,
  loading,
  error,
  setNumberOfRows,
  numberOfRows,
  setSearchBy,
  refresh,
  search,
  bulkAction,
  searchKeyData,
  searchBy,
  pagination,
  reload,
}: Props) => {
  const checkbox = useRef<HTMLInputElement>(null);
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);

  useLayoutEffect(() => {
    const isIndeterminate =
      selected.length > 0 && selected.length < data.length;
    setChecked(selected.length === data.length);
    setIndeterminate(isIndeterminate);
    if (checkbox.current) {
      checkbox.current.indeterminate = isIndeterminate;
    }
  }, [selected, data.length]);

  function toggleAll() {
    setSelected(checked || indeterminate ? [] : data);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }

  const searchInput = useRef<HTMLInputElement>(null);

  const searchInputChanged = useMemo(() => {
    if (searchInput.current) {
      return searchInput.current.value !== undefined;
    }
    return false;
  }, []);

  return (
    <div>
      {loading && data.length === 0 && (
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg bg-white">
                <div className="flex items-center justify-center">
                  <PageLoader card text="Fetching data. A moment" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {!loading && !error && data.length === 0 && (
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8 ">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg bg-white py-6">
                <div className="flex flex-col items-center justify-center h-72">
                  <div className="h-32 w-32 rounded-full bg-accent-200 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-12 h-12 text-accent-700"
                    >
                      <path d="M19.906 9c.382 0 .749.057 1.094.162V9a3 3 0 00-3-3h-3.879a.75.75 0 01-.53-.22L11.47 3.66A2.25 2.25 0 009.879 3H6a3 3 0 00-3 3v3.162A3.756 3.756 0 014.094 9h15.812zM4.094 10.5a2.25 2.25 0 00-2.227 2.568l.857 6A2.25 2.25 0 004.951 21H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-2.227-2.568H4.094z" />
                    </svg>
                  </div>
                  <span className="text-gray-400 text-sm font-medium my-6">
                    No data found
                  </span>
                  {search && searchInputChanged && (
                    <span
                      className="bg-accent-700 py-2.5 px-4 text-sm font-medium my-6 cursor-pointer rounded text-white"
                      onClick={() => (reload ? reload() : null)}
                    >
                      Back
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {!loading && error && (
        <div className="mt-8 flex flex-col ">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg bg-white">
                <div className="flex flex-col items-center justify-center h-72">
                  <div className="h-16 w-16 rounded-full bg-red-200 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-12 h-12 text-red-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.478 1.6a.75.75 0 01.273 1.025 3.72 3.72 0 00-.425 1.122c.058.057.118.114.18.168A4.491 4.491 0 0112 2.25c1.413 0 2.673.651 3.497 1.668.06-.054.12-.11.178-.167a3.717 3.717 0 00-.426-1.126.75.75 0 111.298-.75 5.22 5.22 0 01.671 2.045.75.75 0 01-.187.582c-.241.27-.505.52-.787.749a4.495 4.495 0 01.216 2.1c-.106.792-.753 1.295-1.417 1.403-.182.03-.364.057-.547.081.152.227.273.476.359.741a23.122 23.122 0 003.832-.802 23.241 23.241 0 00-.345-2.634.75.75 0 011.474-.28c.21 1.115.348 2.256.404 3.418a.75.75 0 01-.516.749c-1.527.5-3.119.855-4.76 1.05-.074.38-.22.735-.423 1.05a24.61 24.61 0 015.943 1.358.75.75 0 01.492.75 24.665 24.665 0 01-1.189 6.25.75.75 0 01-1.425-.47 23.141 23.141 0 001.077-5.307c-.5-.168-1.009-.32-1.524-.454.068.234.104.484.104.746 0 3.956-2.521 7.5-6 7.5-3.478 0-6-3.544-6-7.5 0-.262.037-.511.104-.746-.514.134-1.022.286-1.522.454a23.14 23.14 0 001.077 5.308.75.75 0 01-1.425.468 24.663 24.663 0 01-1.19-6.25.75.75 0 01.493-.749 24.593 24.593 0 014.964-1.24h.01c.321-.046.644-.085.969-.118a2.982 2.982 0 01-.424-1.05 24.614 24.614 0 01-4.76-1.05.75.75 0 01-.516-.75c.057-1.161.194-2.302.405-3.417a.75.75 0 011.474.28c-.164.862-.28 1.74-.345 2.634 1.237.37 2.517.641 3.832.802.085-.265.207-.514.359-.74a18.732 18.732 0 01-.547-.082c-.664-.108-1.311-.611-1.417-1.403a4.535 4.535 0 01.217-2.103 6.788 6.788 0 01-.788-.751.75.75 0 01-.187-.583 5.22 5.22 0 01.67-2.04.75.75 0 011.026-.273z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm font-medium">
                      An error occurred loading data.
                    </span>
                  </div>
                  <div>
                    <span className="text-red-400 text-xs font-medium">
                      {error?.message}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {data.length !== 0 && (
        <>
          <div className="flex flex-row justify-between">
            {search && (
              <div>
                <div className="mt-1 relative flex items-center">
                  <input
                    type="text"
                    name="search"
                    placeholder={`search by ${searchBy}`}
                    onChange={(e) => {
                      search && search(e.target.value);
                    }}
                    ref={searchInput}
                    id="search"
                    className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full pr-12 pl-2 sm:text-sm py-2 border-gray-300 border rounded-l-md"
                  />
                  <Menu as="div" className="relative -ml-px block z-50">
                    <Menu.Button className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:border-primary-500 focus:outline-none focus:ring-1">
                      {_.upperFirst(
                        searchBy && searchBy?.split(" ")?.length > 1
                          ? searchBy?.split(" ")[0]
                          : searchBy
                      )}
                      <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                    </Menu.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute z-50 right-0 mt-2 -mr-1 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          {searchKeyData &&
                            searchKeyData.map((searchKey) => (
                              <Menu.Item>
                                {({ active }) => (
                                  <span
                                    onClick={
                                      setSearchBy
                                        ? () => setSearchBy(searchKey.value)
                                        : () => null
                                    }
                                    className={clsx(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 text-sm"
                                    )}
                                  >
                                    {searchKey.name}
                                  </span>
                                )}
                              </Menu.Item>
                            ))}
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            )}
            <div className="flex  justify-center items-center space-x-2">
              {selected.length > 0 && (
                <div className="flex h-12 items-center space-x-3 bg-gray-50 sm:left-16">
                  {bulkAction && bulkAction}
                </div>
              )}

              {refresh && (
                <button
                  type="button"
                  className="inline-flex items-center px-3 py-2.5 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  onClick={() => {
                    refresh && refresh();
                  }}
                >
                  <svg
                    className={clsx(
                      "w-5 h-5",
                      loading && data.length !== 0 ? "animate-spin" : ""
                    )}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </button>
              )}

              <div className="relative z-50 inline-flex rounded-md shadow-sm">
                <button
                  type="button"
                  className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                >
                  {`Show ${numberOfRows} items`}
                </button>
                <Menu as="div" className="relative -ml-px block z-50">
                  <Menu.Button className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:border-primary-500 focus:outline-none focus:ring-1">
                    <span className="sr-only">Open options</span>
                    <ChevronDownIcon className="h-6 w-6" aria-hidden="true" />
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute z-50 right-0 mt-2 -mr-1 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        {rowsToShow.map((row) => (
                          <Menu.Item key={row.name}>
                            {({ active }) => (
                              <span
                                // href={item.href}
                                onClick={() =>
                                  setNumberOfRows(row?.value as number)
                                }
                                className={clsx(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                {row.name}
                              </span>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                  <table className="min-w-full table-fixed divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="relative w-12 px-6 sm:w-16 sm:px-8"
                        >
                          <input
                            type="checkbox"
                            className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 sm:left-6"
                            ref={checkbox}
                            checked={checked}
                            onChange={toggleAll}
                          />
                        </th>
                        {columns.map((col) => (
                          <th
                            key={col.name}
                            scope="col"
                            className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
                          >
                            {col.name}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {data.map((item, idx) => (
                        <tr
                          key={idx + 1}
                          className={
                            selected.includes(item) ? "bg-gray-50" : undefined
                          }
                        >
                          <td className="relative w-12 px-6 sm:w-16 sm:px-8">
                            {selected.includes(item) && (
                              <div className="absolute inset-y-0 left-0 w-0.5 bg-primary-600" />
                            )}
                            <input
                              type="checkbox"
                              className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 sm:left-6"
                              value={item.email}
                              checked={selected.includes(item)}
                              onChange={(e) =>
                                setSelected(
                                  e.target.checked
                                    ? [...selected, item]
                                    : selected.filter((p) => p !== item)
                                )
                              }
                            />
                          </td>
                          {columns.map((col) =>
                            col.render ? (
                              <td
                                className={clsx(
                                  "whitespace-nowrap py-4 pr-3 text-sm font-medium",
                                  selected.includes(item)
                                    ? "text-primary-600"
                                    : "text-gray-900"
                                )}
                              >
                                <col.render {...item} />
                              </td>
                            ) : (
                              <td
                                className={clsx(
                                  "whitespace-nowrap py-4 pr-3 text-sm font-medium",
                                  selected.includes(item)
                                    ? "text-primary-600"
                                    : "text-gray-900"
                                )}
                              >
                                {
                                  item[
                                    col.accessor as
                                      | string
                                      | ReturnType<(arg?: any) => string>
                                  ]
                                }
                              </td>
                            )
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {pagination && pagination}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TableWithCheckbox;
