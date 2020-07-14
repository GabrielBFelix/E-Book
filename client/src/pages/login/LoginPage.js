import React, {useState} from 'react';
import './loginPageStyles.scss';
import axios from 'axios';

function LoginPage() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit= async() =>{
    const result = await axios.post('http://localhost:3000/api/auth/login',{email, password});
    console.log(result);
  }

  return (
    <div className="login">
      <p>Tela Login</p>
      <div className="inputs">
        <div>
          <input type="text" name ="email" value={email} 
          onChange={(event)=>setEmail(event.target.value)}></input>
        </div>

        <div>
          <input type="password" name="password" value={password} 
          onChange={(event)=>setPassword(event.target.value)}></input>
        </div>
        <button onClick={handleSubmit}>Login</button>
      </div>
    </div>
  );
}

export default LoginPage;
