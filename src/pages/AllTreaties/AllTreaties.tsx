import { clsx, Pagination } from "@mantine/core";
import { Fragment, useState } from "react";
import { useAppSelector } from "../../app/hooks";
import Loader from "../../components/Loader";
import PageHeader from "../../components/page-header";
import PageWrapper from "../../components/page-wrapper";
import Show from "../../components/show";
import YearTabs from "../../components/year-tabs";
import { BrokerTypes } from "../../graphql/__generated__/globalTypes";
import { useTreaties } from "../../hooks/useTreaties";
import TreatyItem from "./components/TreatyItem";

type Props = {};

const AllTreaties = (props: Props) => {
  const [year, setYear] = useState("second");
  const [activeTab, setActiveTab] = useState<BrokerTypes>(BrokerTypes.VISAL);
  const { selectedTreaty } = useAppSelector((state) => state.treaty);
  const { loading, treaties, total_treaties } = useTreaties({
    broker: activeTab,
  });
  return (
    <PageWrapper>
      <PageHeader title="Treaties" />
      <YearTabs {...{ year, setYear, activeTab, setActiveTab }} />
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
