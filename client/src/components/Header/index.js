import React, { useContext } from 'react';

import { Button } from 'reactstrap';

import { Link } from 'react-router-dom';

import { UserContext } from '../../contexts/UserContext';

import './styles.css';

const Header = () => {
  const userContext = useContext(UserContext);

  return (
    <div className="main-header">
      <div className="content">
        <Link to="/" style={{ color: '#25acd5', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h2 style={{ margin: 0, padding: 0 }}>E-Book</h2>
        </Link>
        {userContext.user ? (
          <>
            <Link style={{backgroundColor: "#000" , color: "#fff" , padding: '10px' , borderRadius: '10px'}} to="/bookings">Bookings</Link>
            <Button onClick={(event) => userContext.saveUser(null)}>Sair</Button>
          </>
        ) : (
          <Link to="/login">Entrar</Link>
        )}
      </div>
    </div>
  );
};

export default Header;
