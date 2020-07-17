import React, {useState} from 'react';
import './loginPageStyles.scss';
import axios from 'axios';

function LoginPage() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit= async() =>{
    const result = await axios.post('http://localhost:3001/api/auth/login',{email, password});
    console.log(result);
  }

  return (
    <div className="login">
      <p>Tela Login</p>
      <div className="inputs">
        <div>
          <p>Nome</p>
          <input type="email" name ="email" value={email} 
          onChange={(event)=>setEmail(event.target.value)}></input>
        </div>

        <div>
          <p>Senha</p>
          <input type="password" name="password" value={password} 
          onChange={(event)=>setPassword(event.target.value)}></input>
        </div>
        <button onClick={handleSubmit}>Login</button>
      </div>
      <a href="/cadastro">Cliente novo? Cadastre-se</a>
    </div>
  );
}

export default LoginPage;
