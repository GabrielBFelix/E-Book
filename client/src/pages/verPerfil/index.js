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
  //const handleAddressChange = ({ target: input }) => setUser({ ...user, [input.name]: input.value })

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
              <Input type="text" name="username" value={username} readOnly></Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Email</Label>
            <Col sm={10}>
              <Input type="email" name="email" value={email} readOnly></Input>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={2}>Rua</Label>
            <Col sm={10}>
              <Input type="text" name="street" value={address.street} readOnly></Input>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={2}>Numero</Label>
            <Col sm={10}>
              <Input type="text" name="number" value={address.number} readOnly></Input>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={2}>Bairro</Label>
            <Col sm={10}>
              <Input type="text" name="neighborhood" value={address.neighborhood} readOnly></Input>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={2}>Estado</Label>
            <Col sm={10}>
              <Input type="text" name="state" value={address.state} readOnly></Input>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={2}>Pais</Label>
            <Col sm={10}>
              <Input type="text" name="country" value={address.country} readOnly></Input>
            </Col>
          </FormGroup>
        </Form>
        <div className="buttons">
          <Button>botão</Button>
          <Button>botão</Button>
        </div>
      </section>
    </div>
  );
}

export default VerPerfil;
