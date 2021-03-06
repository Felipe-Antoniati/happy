import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Map from "./pages/Map";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/map"  component={Map} />
      </Switch>
    </BrowserRouter>
  );
}
