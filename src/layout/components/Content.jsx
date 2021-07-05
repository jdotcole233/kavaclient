import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Offers from "../../Pages/Offers/Offers";
import Settings from "../../Pages/Settings/Settings";

const Content = () => {
  return (
    <Fragment>
      <main className="flex-1 overflow-y-auto">
        <Route path="/offers" exact component={Offers} />
        <Route path="/settings" exact component={Settings} />
      </main>
    </Fragment>
  );
};

export default Content;
