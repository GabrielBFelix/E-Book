import React, {useState} from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import './cadastroPageStyles.scss';
import axios from 'axios';

function CadastroPage() {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSubmit= async() =>{
  const result = await axios.post('http://localhost:3001/api/auth/',{nome, email, password, passwordConfirm});
    console.log(result);
  }

  return (
   <div className="Cadastro">
   <Form className="cadastro-form">
     <h1 className="text-center">Pagina de Cadastro</h1>
     <FormGroup row>
       <Label sm={2}>Nome</Label>
       <Col sm={10}>
          <Input type="text" name ="nome" value={nome} 
          onChange={(event)=>setNome(event.target.value)}></Input>
       </Col>
     </FormGroup>
     <FormGroup row>
       <Label sm={2}>Email</Label>
       <Col sm={10}>
          <Input type="email" name="email" value={email} 
          onChange={(event)=>setEmail(event.target.value)}></Input>
       </Col>
     </FormGroup>
     <FormGroup row>
       <Label sm={2}>Senha</Label>
       <Col sm={10}>
          <Input type="password" name="password" value={password}
          onChange={(event)=>setPassword(event.target.value)}></Input>
       </Col>
     </FormGroup>
     <FormGroup row>
       <Label sm={2}>Confirmar Senha</Label>
       <Col sm={10}>
          <Input type="password" name="passwordConfirm" value={passwordConfirm}
          onChange={(event)=>setPasswordConfirm(event.target.value)}></Input>
       </Col>
     </FormGroup>
     <div className="buttons">
       <Button color="danger">Cancelar</Button>
       <Button color="primary" onClick={handleSubmit}>Cadastrar</Button>
     </div>
   </Form>
 </div>
  );
}

export default CadastroPage;
