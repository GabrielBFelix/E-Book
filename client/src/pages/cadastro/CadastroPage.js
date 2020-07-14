import React, {useState} from 'react';
import './cadastroPageStyles.scss';
import axios from 'axios';

function CadastroPage() {

  const [nome, setNome] = useState("Nome");
  const [email, setEmail] = useState("email");
  const [password, setPassword] = useState("senha");

  const handleSubmit= async() =>{
  const result = await axios.post('http://localhost:3000/api/auth/login',{nome, email, password});
  console.log(result);
  }

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
            <input type="password" name="password" value={password}
            onChange={(event)=>setPassword(event.target.value)}></input>
        </div>
        <button onClick={handleSubmit}>Cadastrar</button>
      </div>
    </div>
  );
}

export default CadastroPage;
