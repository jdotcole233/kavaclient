import { DocumentIcon } from "@heroicons/react/24/outline";
import { clsx, Pagination, ScrollArea } from "@mantine/core";
import { SetStateAction, useState } from "react";
import { useAppSelector } from "../../app/hooks";
import EmptyPlaceholder from "../../components/empty-placeholder";
import Loader from "../../components/Loader";
import PageHeader from "../../components/page-header";
import PageWrapper from "../../components/page-wrapper";
import Show from "../../components/show";
import TableWithCheckbox from "../../components/TableWithCheckbox/TableWithCheckbox";
import Tabs from "../../components/year-tabs";
import { FetchOffers_fetchOffers_offers } from "../../graphql/queries/__generated__/FetchOffers";
import { BrokerTypes } from "../../graphql/__generated__/globalTypes";
import { useOffers } from "../../hooks/useOffers";
import { TableData } from "../../utils/types";
import Offer from "./components/OfferItem";
import OffersActionMenu from "./components/OffersActionMenu";
import Overview from "./components/Overview";

type Props = {};

const AllOffers = (props: Props) => {
  const [year, setYear] = useState("second");
  const [activeTab, setActiveTab] = useState<BrokerTypes>(BrokerTypes.VISAL);
  const { selectedOffer } = useAppSelector((state) => state.offers);
  const { offers, loading, total_offers, total_shares, error } = useOffers({
    broker: activeTab,
  });

  return (
    <PageWrapper>
      <PageHeader title="Facultative Offers" />
      <Overview
        stats={[
          {
            name: "Total Offers",
            value: total_offers ?? 0,
          },
          ...(total_shares
            ? Object.keys(total_shares).map((e) => ({
                name: `Total ${e}`,
                value: `${total_shares[e]}`,
              }))
            : []),
        ]}
      />
      <Tabs
        year={year}
        setYear={setYear}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
        // tabs={[]}
      />
      <Show if={loading}>
        <Loader />
      </Show>
      <Show if={!loading}>
        <ScrollArea>
          <section className="mt-8 pb-16" aria-labelledby="gallery-heading">
            <Show if={offers.length < 1}>
              <EmptyPlaceholder message={`No offers found for ${activeTab}`} />
            </Show>
            <TableWithCheckbox
              columns={[
                {
                  accessor: "",
                  name: "Policy Number | Cedant",
                  render: (offer: FetchOffers_fetchOffers_offers | null) => (
                    <div className="flex items-center max-w-md ">
                      <div className="h-10 w-10 flex-shrink-0">
                        <DocumentIcon className="h-10 w-10 rounded-full" />
                      </div>
                      <div className="ml-4 break-all pl-3 truncate text-ellipsis">
                        <div className="font-medium truncate text-gray-900">
                          {offer?.offer_detail?.insured_by}
                        </div>
                        <div className="text-gray-500">N/A</div>
                      </div>
                    </div>
                  ),
                },
                {
                  accessor: "",
                  name: "Period From | Period To",
                  render: (offer: FetchOffers_fetchOffers_offers | null) => (
                    <div className="flex items-center">
                      <div className="">
                        <div className="font-medium text-green-900">
                          {offer?.offer_detail?.period_of_insurance_from}
                        </div>
                        <div className="text-red-500">
                          {offer?.offer_detail?.period_of_insurance_from}
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  accessor: "",
                  name: "Currency | Reinsured",
                  render: (offer: FetchOffers_fetchOffers_offers | null) => (
                    <div className="flex items-center max-w-md">
                      <div className="break-all pl-3 truncate text-ellipsis">
                        <div className="font-medium truncate text-gray-900">
                          {offer?.offer_detail?.currency}
                        </div>
                        <div className="text-gray-500">
                          {offer?.offer?.insurer?.insurer_company_name}
                        </div>
                      </div>
                    </div>
                  ),
                },
                // {
                //   accessor: "",
                //   name: "Currency",
                //   render: (offer: FetchOffers_fetchOffers_offers | null) => (
                //     <div className="flex items-center">
                //       <div className="">
                //         <div className="font-medium text-gray-900">
                //           {offer?.offer_detail?.currency}
                //         </div>
                //         {/* <div className="text-red-500">
                //           {offer?.offer_detail?.period_of_insurance_from}
                //         </div> */}
                //       </div>
                //     </div>
                //   ),
                // },
                {
                  accessor: "",
                  name: "Action",
                  render: (offer: FetchOffers_fetchOffers_offers | null) => (
                    <OffersActionMenu offer={offer} />
                  ),
                },
              ]}
              data={offers}
              setSelected={function (
                value: SetStateAction<TableData<any>>
              ): void {
                throw new Error("Function not implemented.");
              }}
              selected={[]}
              loading={loading}
              error={error}
              setNumberOfRows={function (value: SetStateAction<number>): void {
                throw new Error("Function not implemented.");
              }}
              numberOfRows={10}
            />
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                      <table className="min-w-full divide-y divide-gray-300">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                            >
                              Policy Number | Cedant
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                              Period
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                              Insured
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                            >
                              Currency
                            </th>
                            <th
                              scope="col"
                              className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                            >
                              <span className="sr-only">Edit</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white">
                          {offers?.map((offer, idx) => (
                            <tr key={idx}>
                              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                                <div className="flex items-center">
                                  <div className="h-10 w-10 flex-shrink-0">
                                    <DocumentIcon className="h-10 w-10 rounded-full" />
                                  </div>
                                  <div className="ml-4">
                                    <div className="font-medium text-gray-900">
                                      {offer?.offer_detail?.insured_by}
                                    </div>
                                    <div className="text-gray-500">N/A</div>
                                  </div>
                                </div>
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                {offer?.offer_detail?.period_of_insurance_from}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                {offer?.offer?.insurer?.insurer_company_name}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                Member
                              </td>
                              <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                <a
                                  href="#"
                                  className="text-indigo-600 hover:text-indigo-900"
                                >
                                  Edit
                                  <span className="sr-only">
                                    , Lindsay Walton
                                  </span>
                                </a>
                              </td>
                            </tr>
                          ))}

                          {/* <!-- More people... --> */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <Pagination total={offers?.length} /> */}
        </ScrollArea>
      </Show>
    </PageWrapper>
  );
};

export default AllOffers;
