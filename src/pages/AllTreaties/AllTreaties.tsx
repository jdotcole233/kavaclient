import { DocumentIcon } from "@heroicons/react/24/outline";
import { SetStateAction, useState } from "react";
import PageHeader from "../../components/page-header";
import PageWrapper from "../../components/page-wrapper";
import TableWithCheckbox from "../../components/TableWithCheckbox/TableWithCheckbox";
import YearTabs from "../../components/year-tabs";
import { FetchTreaties_fetchTreaties_treaties } from "../../graphql/queries/__generated__/FetchTreaties";
import { BrokerTypes } from "../../graphql/__generated__/globalTypes";
import { useTreaties } from "../../hooks/useTreaties";
import { TableData } from "../../utils/types";
import Overview from "../AllOffers/components/Overview";
import TreatyActionsMenu from "./components/TreatyActionsMenu";

type Props = {};

const AllTreaties = (props: Props) => {
  const [year, setYear] = useState("");
  const [activeTab, setActiveTab] = useState<BrokerTypes>(BrokerTypes.VISAL);
  const { loading, treaties, total_treaties, total_shares, error, refetch } =
    useTreaties({
      broker: activeTab,
    });
  return (
    <PageWrapper>
      <PageHeader title="Treaties" />
      <Overview
        stats={[
          {
            name: "Total Offers",
            value: total_treaties ?? 0,
          },
          ...(total_shares
            ? Object.keys(total_shares).map((e) => ({
                name: `Total ${e}`,
                value: `${total_shares[e]}`,
              }))
            : []),
        ]}
      />
      <YearTabs {...{ year, setYear, activeTab, setActiveTab }} />
      <section className="mt-8 pb-16" aria-labelledby="gallery-heading">
        <TableWithCheckbox
          columns={[
            {
              accessor: "",
              name: "REF# | Treaty Name",
              render: (offer: FetchTreaties_fetchTreaties_treaties | null) => (
                <div className="flex items-center max-w-md ">
                  <div className="h-10 w-10 flex-shrink-0">
                    <DocumentIcon className="h-10 w-10 rounded-full" />
                  </div>
                  <div className="ml-4 break-all pl-3 truncate text-ellipsis">
                    <div className="font-medium truncate text-gray-900">
                      {offer?.treaty_reference}
                    </div>
                    <div className="text-gray-500">{offer?.treaty_name}</div>
                  </div>
                </div>
              ),
            },
            {
              accessor: "",
              name: "Period From | Period To",
              render: (offer: FetchTreaties_fetchTreaties_treaties | null) => (
                <div className="flex items-center">
                  <div className="">
                    <div className="font-medium text-green-900">N/A</div>
                    <div className="text-red-500">N/A</div>
                  </div>
                </div>
              ),
            },
            {
              accessor: "",
              name: "Currency | Reinsured",
              render: (offer: FetchTreaties_fetchTreaties_treaties | null) => (
                <div className="flex items-center max-w-md">
                  <div className="break-all pl-3 truncate text-ellipsis">
                    <div className="font-medium truncate text-gray-900">
                      {offer?.currency}
                    </div>
                    <div className="text-gray-500">
                      {offer?.insurance_company_name}
                    </div>
                  </div>
                </div>
              ),
            },
            {
              accessor: "",
              name: "Treaty PCT | Your PCT",
              render: (offer: FetchTreaties_fetchTreaties_treaties | null) => (
                <div className="flex items-center">
                  <div className="">
                    <div className="font-medium text-gray-900">
                      {offer?.total_participation_percentage}%
                    </div>
                    <div className="text-green-500">
                      {offer?.treaty_participation_percentage}%
                    </div>
                  </div>
                </div>
              ),
            },
            {
              accessor: "",
              name: "Action",
              render: (offer: FetchTreaties_fetchTreaties_treaties | null) => (
                <TreatyActionsMenu treaty={offer} />
              ),
            },
          ]}
          data={treaties}
          setSelected={function (value: SetStateAction<TableData<any>>): void {
            throw new Error("Function not implemented.");
          }}
          selected={[]}
          loading={loading}
          error={error}
          setNumberOfRows={function (value: SetStateAction<number>): void {
            throw new Error("Function not implemented.");
          }}
          numberOfRows={10}
          refresh={refetch}
        />
      </section>
    </PageWrapper>
  );
};

export default AllTreaties;
