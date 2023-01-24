import { clsx, Pagination, ScrollArea } from "@mantine/core";
import { useState } from "react";
import { useAppSelector } from "../../app/hooks";
import EmptyPlaceholder from "../../components/empty-placeholder";
import Loader from "../../components/Loader";
import PageHeader from "../../components/page-header";
import PageWrapper from "../../components/page-wrapper";
import Show from "../../components/show";
import Tabs from "../../components/year-tabs";
import { BrokerTypes } from "../../graphql/__generated__/globalTypes";
import { useOffers } from "../../hooks/useOffers";
import Offer from "./components/OfferItem";
import Overview from "./components/Overview";

type Props = {};

const AllOffers = (props: Props) => {
  const [year, setYear] = useState("second");
  const [activeTab, setActiveTab] = useState<BrokerTypes>(BrokerTypes.VISAL);
  const { selectedOffer } = useAppSelector((state) => state.offers);
  const { offers, loading, total_offers, total_shares } = useOffers({
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
            <ul
              className={clsx(
                selectedOffer
                  ? "grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8"
                  : "grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8"
              )}
            >
              {offers.map((file, key) => (
                <Offer key={key} file={file} />
              ))}
            </ul>
          </section>
          <Pagination total={offers?.length} />
        </ScrollArea>
      </Show>
    </PageWrapper>
  );
};

export default AllOffers;
