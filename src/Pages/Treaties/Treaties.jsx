import React, { useState } from "react";
import PageHeader from "../../Components/PageHeader";
import PageWrapper from "../../Components/PageWrapper";
import Tabs from "./Components/Tabs";
import { TreatyProvider } from "./Providers/TreatyProvider";

const Treaties = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <TreatyProvider value={{ activeTab, setActiveTab }}>
      <PageWrapper>
        <PageHeader title="Treaties" />
        <Tabs />
      </PageWrapper>
    </TreatyProvider>
  );
};

export default Treaties;
