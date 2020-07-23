import React, { useState, useContext } from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";
import './cadastroPageStyles.scss';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from "../../contexts/UserContext"

function CadastroPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState({
    street: "",
    number: "",
    neighborhood: "",
    country: "",
    state: "",
  });
  const history = useHistory();
  const userContext = useContext(UserContext);

  const handleSubmit = async() =>{
    const result = await axios.post('http://localhost:3001/api/auth/signUp',{username, email, password, passwordConfirm, address});
    console.log(result);
    userContext.saveUser(result.data.data.token);
    history.push("/");
  }
  const handleAddressChange = ({target :input}) => setAddress({...address , [input.name] : input.value})

  return (
   <div className="forms">
   <Form className="cadastro-form">
     <h1 className="text-center">Pagina de Cadastro</h1>
     <FormGroup row>
       <Label sm={2}>Nome</Label>
       <Col sm={10}>
          <Input type="text" name ="username" placeholder="Nome" value={username} 
          onChange={(event)=>setUsername(event.target.value)}></Input>
       </Col>
     </FormGroup>
     <FormGroup row>
       <Label sm={2}>Email</Label>
       <Col sm={10}>
          <Input type="email" name="email" placeholder="Email" value={email} 
          onChange={(event)=>setEmail(event.target.value)}></Input>
       </Col>
     </FormGroup>
     <FormGroup row>
       <Label sm={2}>Senha</Label>
       <Col sm={10}>
          <Input type="password" name="password" placeholder="Senha" value={password}
          onChange={(event)=>setPassword(event.target.value)}></Input>
       </Col>
     </FormGroup>
     <FormGroup row>
       <Label sm={2}>Confirmar Senha</Label>
       <Col sm={10}>
          <Input type="password" name="passwordConfirm" placeholder="Confirme sua senha" value={passwordConfirm}
          onChange={(event)=>setPasswordConfirm(event.target.value)}></Input>
       </Col>
     </FormGroup>
     <h2 className="text-center">Endereço</h2>
     <FormGroup row>
       <Label sm={2}>Rua</Label>
       <Col sm={10}>
          <Input type="text" name="street" placeholder="Rua" value={address.street} onChange={handleAddressChange}></Input>
       </Col>
     </FormGroup>
     <FormGroup row>
       <Label sm={2}>Bairro</Label>
       <Col sm={10}>
          <Input type="text" name="neighborhood" placeholder="Bairro" value={address.neighborhood} onChange={handleAddressChange}></Input>
       </Col>
     </FormGroup>
     <FormGroup row>
       <Label sm={2}>Número</Label>
       <Col sm={10}>
          <Input type="text" name="number" placeholder="Número" pattern="[0-9]+$" value={address.number} onChange={handleAddressChange}></Input>
       </Col>
     </FormGroup>
     <FormGroup row>
       <Label sm={2}>País</Label>
       <Col sm={10}>
          <Input type="text" name="country" placeholder="País" value={address.country} onChange={handleAddressChange}></Input>
       </Col>
     </FormGroup>
     <FormGroup row>
       <Label sm={2}>Estado</Label>
       <Col sm={10}>
          <Input type="text" name="state" placeholder="Estado" value={address.state} onChange={handleAddressChange}></Input>
       </Col>
     </FormGroup>
     <div className="buttons">
       <Link to={'/login'}><Button color="danger">Cancelar</Button></Link>
       
       <Button color="primary" onClick={handleSubmit}>Cadastrar</Button>
     </div>
   </Form>
 </div>
  );
}

export default CadastroPage;
