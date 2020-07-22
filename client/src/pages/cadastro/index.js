import React, {useState} from 'react';
import './cadastroPageStyles.scss';
import axios from 'axios';

function CadastroPage() {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [PasswordConfirm, setPasswordConfirm] = useState("");

  const handleSubmit= async() =>{
  const result = await axios.post('http://localhost:3001/api/auth/',{nome, email, password, PasswordConfirm});
    console.log(result);
  }

  return (
    <div className="cadastro">
      <p>Tela de Cadastro</p>
      <div className="inputs">
        <div>
          <p>Nome</p>
          <input type="text" name ="nome" value={nome} 
          onChange={(event)=>setNome(event.target.value)}></input>
        </div>

        <div>
          <p>Email</p>
          <input type="email" name="email" value={email} 
          onChange={(event)=>setEmail(event.target.value)}></input>
        </div>

        <div>
            <p>Senha</p>
            <input type="password" name="password" value={password}
            onChange={(event)=>setPassword(event.target.value)}></input>
        </div>

        <div>
            <p>Confirmar Senha</p>
            <input type="password" name="passwordConfirm" value={PasswordConfirm}
            onChange={(event)=>setPasswordConfirm(event.target.value)}></input>
        </div>
        <button onClick={handleSubmit}>Cadastrar</button>
      </div>
      <a href="/">Cancelar</a>
    </div>
  );
}

export default CadastroPage;
