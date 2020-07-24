import React, { useContext } from 'react';
import Header from './components/Header';

import { Switch, Route, Redirect } from 'react-router-dom';

import { UserContext } from './contexts/UserContext';

import LoginPage from './pages/login/';
import CadastroPage from './pages/cadastro';
import Livro from './pages/cadastro_livro';
import HomePage from './pages/landing_page';
import DetailBook from './pages/detail_book/';
import VerPerfil from './pages/verPerfil';
import BookingsPage from './pages/BookingsPage';

function App() {
  const userContext = useContext(UserContext);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/books/:id" component={DetailBook} />

        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path="/login"
          render={(...props) => (userContext.user ? <Redirect to="/" /> : <LoginPage {...props}></LoginPage>)}
        />
        <Route path="/cadastro" render={(...props) => (userContext.user ? <Redirect to="/" /> : <CadastroPage {...props}></CadastroPage>)} />
        <Route
          path="/cadastro_livro"
          render={(...props) => (userContext.user ? <Livro {...props} /> : <Redirect to="/" />)}
        />
        <Route
          path="/user"
          render={(...props) => (userContext.user ? <VerPerfil {...props} /> : <Redirect to="/" />)}
        />

        <Route
          path="/bookings"
          render={(props) => (userContext.user ? <BookingsPage {...props} /> : <Redirect to="/"></Redirect>)}
        ></Route>
      </Switch>
    </div>
  );
}

export default App;
