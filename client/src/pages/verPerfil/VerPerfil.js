import React from 'react';

function VerPerfil() {

  return (
    <div className="perfil">
      <p>Perfil</p>
      <div className="inputs">
        <div>
          <input type="text" name ="nome" 
          value={(event)=>getNome(event.target.value)}></input>
        </div>
        <div>
          <input type="text" name ="email" 
          value={(event)=>getEmail(event.target.value)}></input>
        </div>

        <div>
          <input type="password" name="password" 
          value={(event)=>getPassword(event.target.value)}></input>
        </div>
      </div>
    </div>
  );
}

export default VerPerfil;
