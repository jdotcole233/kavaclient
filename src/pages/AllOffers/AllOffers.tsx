import { clsx, Pagination } from "@mantine/core";
import { Fragment, useState } from "react";
import { useAppSelector } from "../../app/hooks";
import Loader from "../../components/Loader";
import PageHeader from "../../components/page-header";
import PageWrapper from "../../components/page-wrapper";
import Show from "../../components/show";
import Tabs from "../../components/year-tabs";
import { BrokerTypes } from "../../graphql/__generated__/globalTypes";
import { useOffers } from "../../hooks/useOffers";
import Offer from "./components/OfferItem";

type Props = {};

const AllOffers = (props: Props) => {
  const [year, setYear] = useState("second");
  const [activeTab, setActiveTab] = useState<BrokerTypes>(BrokerTypes.VISAL);
  const { selectedOffer } = useAppSelector((state) => state.offers);
  const { offers, loading } = useOffers({ broker: activeTab });

  return (
    <PageWrapper>
      <PageHeader title="AllOffers" />
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
        <Fragment>
          <section className="mt-8 pb-16" aria-labelledby="gallery-heading">
            <h2 id="gallery-heading" className="sr-only">
              Recently viewed
            </h2>
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
        </Fragment>
      </Show>
    </PageWrapper>
  );
};

export default AllOffers;
