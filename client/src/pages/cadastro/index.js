import React, {useState} from 'react';
import './cadastroPageStyles.scss';
import axios from 'axios';

function CadastroPage() {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password0, setPassword0] = useState("");
  const [password1, setPassword1] = useState("");

  const handleSubmit= async() =>{
  const result = await axios.post('http://localhost:3000/api/auth/login',{nome, email, password0, password1});
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
          <input type="text" name="email" value={email} 
          onChange={(event)=>setEmail(event.target.value)}></input>
        </div>

        <div>
            <p>Senha</p>
            <input type="password" name="password0" value={password0}
            onChange={(event)=>setPassword0(event.target.value)}></input>
        </div>

        <div>
            <p>Confirmar Senha</p>
            <input type="password" name="password1" value={password1}
            onChange={(event)=>setPassword1(event.target.value)}></input>
        </div>
        <button onClick={handleSubmit}>Cadastrar</button>
      </div>
      <a href="/">Cancelar</a>
    </div>
  );
}

export default CadastroPage;
