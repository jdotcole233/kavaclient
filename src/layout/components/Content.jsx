import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Brokers from "../../Pages/Brokers/Brokers";
import Offers from "../../Pages/Offers/Offers";
import Settings from "../../Pages/Settings/Settings";
import Treaties from "../../Pages/Treaties/Treaties";

const Content = () => {
  return (
    <Fragment>
      <main className="flex-1 overflow-y-auto">
        <Switch>
          <Route paath="/app/" component={Offers} />
          <Route path="/app/offers" component={Offers} />
          <Route path="/app/treaties" component={Treaties} />
          <Route path="/app/settings" component={Settings} />
          <Route path="/app/brokers" component={Brokers} />
        </Switch>
      </main>
    </Fragment>
  );
};

export default Content;
