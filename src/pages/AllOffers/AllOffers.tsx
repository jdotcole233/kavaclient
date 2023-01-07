import React, { useState } from "react";
import PageHeader from "../../components/page-header";
import PageWrapper from "../../components/page-wrapper";
import Tabs from "../../components/year-tabs";
import { BrokerTypes } from "../../graphql/__generated__/globalTypes";
import { useOffers } from "../../hooks/useOffers";

type Props = {};

const AllOffers = (props: Props) => {
  const [year, setYear] = useState("second");
  const [activeTab, setActiveTab] = useState<BrokerTypes>(BrokerTypes.VISAL);
  useOffers({ broker: activeTab });
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
    </PageWrapper>
  );
};

export default AllOffers;
