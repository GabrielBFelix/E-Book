import React, { useContext } from 'react';
import { Button, Form, Container, Row } from 'reactstrap';
import { useForm, Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { Link, useHistory } from 'react-router-dom';

import { UserContext } from '../../contexts/UserContext';
import './loginPageStyles.scss';

import CustomInput from '../../components/Input';

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
      console.log(data);
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
        <CustomInput
          label="email"
          type="email"
          name="email"
          text="Email"
          placeholder="Enter your email..."
          defaultValue=""
          control={control}
          errors={errors}
          rules={{ required: 'This field is required' }}
        />

        <CustomInput
          label="password"
          type="password"
          name="password"
          text="Password"
          placeholder="Enter your password..."
          defaultValue=""
          control={control}
          errors={errors}
          rules={{
            required: 'This field is required',
            min: { value: 8, message: 'A password must have 8+ characters' },
          }}
        />
        <Row style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <Button color="primary" type="submit" style={{ width: '25%' }}>
            Login
          </Button>
          <Link
            className="button-amarelo"
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
