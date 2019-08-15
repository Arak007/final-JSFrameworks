import React from "react";
import { Route, Switch } from "react-router-dom";

import CarIndex from "./cars/index";
import CarShow from "./cars/show";
import CarNew from "./cars/new";
import CarEdit from "./cars/edit";
import CarDestroy from "./cars/destroy";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={CarIndex} />
      <Route exact path="/new" component={CarNew} />
      <Route exact path="/:id" component={CarShow} />
      <Route exact path="/:id/edit" component={CarEdit} />
      <Route exact path="/:id/destroy" component={CarDestroy} />
    </Switch> 
  );
}

export default Routes;