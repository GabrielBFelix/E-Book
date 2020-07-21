import React from "react";

import "./styles.css";

const Header = () => {
  const removeStorage = () => localStorage.removeItem('token');
  ;

  const buttonLink = () => {

  }

  return (
    <div className="main-header">
      <div className="content">
        <h2>E-Book</h2>
        <div className="buttons">
          <a href="/login">Entrar</a>
          <a href="/" onClick={removeStorage}>Sair</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
