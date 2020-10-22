import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "../pages/p_landing";
import MapsHomeSocieties from "../pages/p_maps_home_societies";
import CreateHomeSociety from "../pages/p_create_home_society";
import HomeSociety from "../pages/p_home_society";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={MapsHomeSocieties} />
        <Route path="/home-societies/create" component={CreateHomeSociety} />
        <Route path="/home-societies/:id" component={HomeSociety} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
