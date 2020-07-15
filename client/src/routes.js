import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import LoginPage from "./pages/login/";
import CadastroPage from "./pages/cadastro";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route path="/cadastro" component={CadastroPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
