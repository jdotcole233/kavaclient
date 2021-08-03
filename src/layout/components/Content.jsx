import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Brokers from "../../Pages/Brokers/Brokers";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Offers from "../../Pages/Offers/Offers";
import Settings from "../../Pages/Settings/Settings";
import Treaties from "../../Pages/Treaties/Treaties";
import Footer from "./Footer";

const Content = () => {
  return (
    <Fragment>
      <main className="flex-1 flex flex-col justify-between h-full overflow-y-scroll">
        <Switch>
          {/* <Route path="/auth" exact component={Dashboard} /> */}
          <Route path="/app/" exact component={Dashboard} />
          <Route path="/app/offers" exact component={Offers} />
          <Route path="/app/treaties" exact component={Treaties} />
          <Route path="/app/settings" exact component={Settings} />
          <Route path="/app/brokers" exact component={Brokers} />
        </Switch>
        <Footer />
      </main>
    </Fragment>
  );
};

export default Content;
