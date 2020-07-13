import React, {useState} from 'react';
import axios from 'axios';

function cadastroPage() {

  return (
    <div className="cadastro">
      <p>Tela de Cadastro</p>
      <div className="inputs">
        <div>
          <input type="text" name ="nome" value={nome} 
          onChange={(event)=>setNome(event.target.value)}></input>
        </div>

        <div>
          <input type="text" name="email" value={email} 
          onChange={(event)=>setEmail(event.target.value)}></input>
        </div>

        <div>
            <input type="text" name="password" value={password}
            onChange={(event)=>setPassword(event.target.value)}></input>
        </div>
        <button onClick={handleSubmit}>Cadastrar</button>
      </div>
    </div>
  );
}

export default cadastroPage;
