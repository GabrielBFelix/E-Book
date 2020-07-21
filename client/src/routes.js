import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import LoginPage from "./pages/login/";
import CadastroPage from "./pages/cadastro";
import Livro from "./pages/cadastro_livro";
import HomePage from "./pages/landing_page";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
      <Route path="/cadastro" component={CadastroPage} />
      <Route path="/cadastro_livro" component={Livro} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
