import { clsx, Pagination } from "@mantine/core";
import { Fragment, useState } from "react";
import { useAppSelector } from "../../app/hooks";
import EmptyPlaceholder from "../../components/empty-placeholder";
import Loader from "../../components/Loader";
import PageHeader from "../../components/page-header";
import PageWrapper from "../../components/page-wrapper";
import Show from "../../components/show";
import YearTabs from "../../components/year-tabs";
import { BrokerTypes } from "../../graphql/__generated__/globalTypes";
import { useTreaties } from "../../hooks/useTreaties";
import Overview from "../AllOffers/components/Overview";
import TreatyItem from "./components/TreatyItem";

type Props = {};

const AllTreaties = (props: Props) => {
  const [year, setYear] = useState("");
  const [activeTab, setActiveTab] = useState<BrokerTypes>(BrokerTypes.VISAL);
  const { selectedTreaty } = useAppSelector((state) => state.treaty);
  const { loading, treaties, total_treaties, total_shares } = useTreaties({
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
      <Show if={loading}>
        <Loader />
      </Show>
      <Show if={!loading}>
        <Fragment>
          <section className="mt-8 pb-16" aria-labelledby="gallery-heading">
            <Show if={treaties.length < 1}>
              <EmptyPlaceholder
                message={`No treaties found for ${activeTab}`}
              />
            </Show>
            <ul
              className={clsx(
                selectedTreaty
                  ? "grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8"
                  : "grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8"
              )}
            >
              {treaties.map((file, key) => (
                <TreatyItem key={key} file={file} />
              ))}
            </ul>
          </section>
          <Pagination total={parseInt(total_treaties ?? "0")} />
        </Fragment>
      </Show>
    </PageWrapper>
  );
};

export default AllTreaties;
