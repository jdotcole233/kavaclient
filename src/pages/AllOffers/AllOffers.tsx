import { DocumentIcon } from "@heroicons/react/24/outline";
import { ScrollArea } from "@mantine/core";
import { SetStateAction, useState } from "react";
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
import OffersActionMenu from "./components/OffersActionMenu";
import Overview from "./components/Overview";

type Props = {};

const AllOffers = (props: Props) => {
  const [year, setYear] = useState("second");
  const [activeTab, setActiveTab] = useState<BrokerTypes>(BrokerTypes.VISAL);
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
              description: "Premium"
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
                          {offer?.offer_detail?.period_of_insurance_to}
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
          </section>
          {/* <Pagination total={offers?.length} /> */}
        </ScrollArea>
      </Show>
    </PageWrapper>
  );
};

export default AllOffers;
