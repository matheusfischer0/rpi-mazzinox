import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Spinner from "./pages/Spinner";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Spinner} />
      </Switch>
    </BrowserRouter>
  );
}
