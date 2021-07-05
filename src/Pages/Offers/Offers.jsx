/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useState } from "react";
import { classNames, files, tabs } from "../../utils";
import {
  ViewGridIcon as ViewGridIconSolid,
  ViewListIcon,
} from "@heroicons/react/solid";
import Offer from "./Components/Offer";
import { useLayoutProps } from "../../layout/Provider/LayoutProvider";
import PageHeader from "../../Components/PageHeader";
import PageWrapper from "../../Components/PageWrapper";
import { OfferProvider } from "./Providers/OfferProvider";
import Tabs from "./Components/Tabs";

const Offers = () => {
  const { selectedOffer } = useLayoutProps();
  const [activeTab, setActiveTab] = useState(0);
  return (
    <OfferProvider value={{ activeTab, setActiveTab }}>
      <PageWrapper>
        <PageHeader />
        {/* Tabs */}
        <Tabs />
        {/* Gallery */}
        <section className="mt-8 pb-16" aria-labelledby="gallery-heading">
          <h2 id="gallery-heading" className="sr-only">
            Recently viewed
          </h2>
          <ul
            role="list"
            className={classNames(
              selectedOffer
                ? "grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8"
                : "grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8"
            )}
          >
            {files.map((file, key) => (
              <Offer key={key} file={file} />
            ))}
          </ul>
        </section>
      </PageWrapper>
    </OfferProvider>
  );
};

export default Offers;
