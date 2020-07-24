import React, {  useContext } from 'react';
import { FormGroup, Input, Label, Button, Form, Container, Row } from 'reactstrap';
import { useForm, Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { Link, useHistory } from 'react-router-dom';

import { UserContext } from '../../contexts/UserContext';
import './loginPageStyles.scss'

import api from '../../services/api';
function LoginPage() {
  const { handleSubmit, errors, control, setError, clearErrors } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const context = useContext(UserContext);
  const history = useHistory();

  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const onSubmit = async (data) => {
    try {
      const response = await api.post('/auth/login', data);
      context.saveUser(response.data.data.token);
      clearErrors(['email', 'password']);
      history.push('/');
    } catch (error) {
      setError('email', { type: 'manual', message: 'Confira se o email está correto' });
      setError('password', { type: 'manual', message: 'Confira se a senha está correta' });
    }
  };

  // const saveToStorage = (token) => localStorage.setItem('token', token);

  return (
    <Container fluid={true} style={{ height: '90vh' }}>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        style={{ height: '80%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
      >
        <FormGroup style={{ width: '75%', margin: ' 0 auto' }}>
          <Label for="email">Email</Label>
          <Controller
            as={Input}
            name="email"
            control={control}
            rules={{ required: 'This field is required', pattern: { value: emailRegex, message: 'Only valid emails' } }}
          ></Controller>
          <ErrorMessage errors={errors} name="email">
            {({ messages }) =>
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <p className="text-danger" key={type}>
                  {message}
                </p>
              ))
            }
          </ErrorMessage>
        </FormGroup>

        <FormGroup style={{ width: '75%', margin: '5vh auto' }}>
          <Label for="password">Password</Label>
          <Controller
            control={control}
            as={<Input type="password" />}
            name="password"
            rules={{ required: 'This field is required', minLength: { value: 8, message: '8+ characteres' } }}
          ></Controller>
          <ErrorMessage errors={errors} name="password">
            {({ messages }) =>
              messages &&
              Object.entries(messages).map(([type, message]) => (
                <p className="text-danger" key={type}>
                  {message}
                </p>
              ))
            }
          </ErrorMessage>
        </FormGroup>
        <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <Button color="primary" type="submit" style={{ width: '25%' }}>
            Login
          </Button>
          <Link className="button-amarelo"
            to="/cadastro"
             style={{
              textDecoration: 'none',
              color: '#000',
              width: '25%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '.25rem', 
            }} 
          >
            Cliente novo? Cadastre-se
          </Link>
        </Row>
      </Form>
    </Container>
  );
}

export default LoginPage;
