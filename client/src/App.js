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
import MyBooksPage from './pages/MyBooksPage';
import MyBookPage from './pages/MyBookPage'
import WishList from './pages/wishList';

const CustomRoute = ({ isPrivate, ...othersProperties }) => {
  const userContext = useContext(UserContext);

  if (isPrivate && !userContext.user) {
    return <Redirect to="/"></Redirect>;
  }

  return <Route {...othersProperties}></Route>;
};

function App() {
  const userContext = useContext(UserContext);

  return (
    <div className="App">
      <Header />
      <Switch>
        <CustomRoute exact path="/" component={HomePage}></CustomRoute>
        <CustomRoute exact isPrivate={true} path="/books/:id" component={DetailBook} />
        <CustomRoute exact isPrivate={true} path="/cadastro_livro" component={Livro} />
        <CustomRoute isPrivate={true} exact path="/myBooks" component={MyBooksPage} />
        <CustomRoute isPrivate={true} exact path="/myBooks/:bookId" component={MyBookPage} />
        <CustomRoute isPrivate={true} component={VerPerfil} path="/user" exact />
        <CustomRoute isPrivate={true} component={WishList} path="/wishList" exact />
        <CustomRoute isPrivate={true} exact path="/bookings" component={BookingsPage} />
        <Route
          path="/cadastro"
          exact
          render={(...props) => (userContext.user ? <Redirect to="/" /> : <CadastroPage {...props}></CadastroPage>)}
        />
        <Route
          exact
          path="/login"
          render={(...props) => (userContext.user ? <Redirect to="/" /> : <LoginPage {...props}></LoginPage>)}
        />
      </Switch>
    </div>
  );
}

export default App;
