import React, { useState, useEffect, useContext } from 'react';
import { Button, Row, Spinner, Form, FormGroup, Input, Label, Col } from 'reactstrap';
import { UserContext } from '../../contexts/UserContext';

import api from '../../services/api';

import './styles.css';

function VerPerfil() {

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [address, setAddress] = useState({
    street: '',
    number: '',
    neighborhood: '',
    country: '',
    state: '',
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const userContext = useContext(UserContext);
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await api.get('/user/getMe', {
          headers: { authorization: `Bearer ${userContext.user}` },
        });
        const { username, email, address } = data.data.doc;
        console.log(username);
        setUsername(username);
        setEmail(email);
        setAddress(address);
        setIsLoading(false);

      } catch (apiError) {
        setIsLoading(false);
        setError(true);
        console.log(apiError);
      }
    }
    fetchData();

  }, [userContext.user]);
  const handleAddressChange = ({ target: input }) => setAddress({ ...address, [input.name]: input.value })

  const handleSubmit = async () => {
    try {
      const result = await api.patch('/user/updateMe', { username, email, address }, { headers: { authorization: `Bearer ${userContext.user}` } });
      console.log(result);
    } catch (apiError){
      console.log(apiError.response);
      setError(apiError.response.data.message);
    }
  };

  return isLoading ? (
    <Row style={{ justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
      <Spinner></Spinner>
    </Row>
  ) : error ? (
    <p>Error</p>
  ) : (
    <div className="perfil">
      <section>
        <h3 className="text-center">User Information</h3>
        <Form className="edit-form">
          <FormGroup row>
            <Label sm={2}>Nome</Label>
            <Col sm={10}>
              <Input type="text" name="username" value={username} onChange={(event) => setUsername(event.target.value)}></Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Email</Label>
            <Col sm={10}>
              <Input type="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)}></Input>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={2}>Rua</Label>
            <Col sm={10}>
              <Input type="text" name="street" value={address.street} onChange={handleAddressChange}></Input>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={2}>Numero</Label>
            <Col sm={10}>
              <Input type="text" name="number" value={address.number} onChange={handleAddressChange}></Input>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={2}>Bairro</Label>
            <Col sm={10}>
              <Input type="text" name="neighborhood" value={address.neighborhood} onChange={handleAddressChange}></Input>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={2}>Estado</Label>
            <Col sm={10}>
              <Input type="text" name="state" value={address.state} onChange={handleAddressChange}></Input>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={2}>Pais</Label>
            <Col sm={10}>
              <Input type="text" name="country" value={address.country} onChange={handleAddressChange}></Input>
            </Col>
          </FormGroup>
        </Form>
        <div className="buttons-profile">
          <Button color="primary" onClick={handleSubmit}>Salvar alterações</Button>
        </div>
      </section>
    </div>
  );
}

export default VerPerfil;
