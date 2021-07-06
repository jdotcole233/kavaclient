import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Broker from "../../Pages/Brokers/Broker";
import Offers from "../../Pages/Offers/Offers";
import Settings from "../../Pages/Settings/Settings";
import Treaties from "../../Pages/Treaties/Treaties";

const Content = () => {
  return (
    <Fragment>
      <main className="flex-1 overflow-y-auto">
        <Route path="/offers" exact component={Offers} />
        <Route path="/treaties" exact component={Treaties} />
        <Route path="/settings" exact component={Settings} />
        <Route path="/brokers" exact component={Broker} />
      </main>
    </Fragment>
  );
};

export default Content;
