/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { Fragment, useState } from "react";
import { classNames } from "../../utils";
import Offer from "./Components/Offer";
import { useLayoutProps } from "../../layout/Provider/LayoutProvider";
import PageHeader from "../../Components/PageHeader";
import PageWrapper from "../../Components/PageWrapper";
import { OfferProvider } from "./Providers/OfferProvider";
import Tabs from "./Components/Tabs";
import { useQuery } from "react-query";
import server from "../../server";
import { useAdminProps } from "../../layout/Provider/AdminProvider";
import Loader from "../../layout/components/Loader";
import Pagination from "../../Components/Pagination";

const Offers = () => {
  const { selectedOffer } = useLayoutProps();
  const { company, linked_to } = useAdminProps();
  const [year, setYear] = useState("2020");

  const [activeTab, setActiveTab] = useState(linked_to[0] ?? "");
  // server.defaults.headers =

  const connString = `/listenForOffers?reinsurer_id=${company?.reinsurer_id[activeTab]}&broker=${activeTab}&year=${year}`;

  const { isLoading, isError, isSuccess, data, isFetching } = useQuery(
    "offers",
    () => server.get(connString),
    {
      onSuccess: (data) => {
        console.log(data);
      },
    }
  );

  return (
    <OfferProvider value={{ activeTab, setActiveTab }}>
      <PageWrapper>
        <PageHeader />
        {/* {JSON.stringify(data)} */}
        {/* Tabs */}
        <Tabs year={year} setYear={setYear} />
        {/* Gallery */}
        {(isLoading || isFetching) && <Loader />}
        {isSuccess && !isFetching && (
          <Fragment>
            <section className="mt-8 pb-16" aria-labelledby="gallery-heading">
              <h2 id="gallery-heading" className="sr-only">
                Recently viewed
              </h2>
              <ul
                role="list"
                className={classNames(
                  selectedOffer
                    ? "grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8"
                    : "grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8"
                )}
              >
                {data.data.data.map((file, key) => (
                  <Offer key={key} file={file} />
                ))}
              </ul>
            </section>
            <Pagination size={100} pageLimit={5} dataLimit={10} />
          </Fragment>
        )}
        {isError && "Error"}
      </PageWrapper>
    </OfferProvider>
  );
};

export default Offers;
