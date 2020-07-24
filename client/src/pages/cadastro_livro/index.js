import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { Col, Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { useForm, Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import './styles.css';
import api from '../../services/api';

const Livro = () => {
  const [error, setError] = useState(null);

  const { errors, handleSubmit, control } = useForm({
    defaultValues: {
      name: '',
      author: '',
      genre: '',
      publisher: '',
      quantity: 0,
      price: 0,
      description: '',
    },
  });
  const history = useHistory();
  const userContext = useContext(UserContext);

  const onSubmit = async (data) => {
    try {
      await api.post('/books', {...data}, { headers: { authorization: `Bearer ${userContext.user}` } });

      history.push('/');
    } catch (apiError) {
      console.log(apiError.response);
      setError(apiError.response.data.message);
    }
  };

  return (
    <div className="forms">
      <Form className="book-form" onSubmit={handleSubmit(onSubmit)}>
        {error ? error.split('.').map((errorMessage) => <Alert color="danger">{errorMessage}</Alert>) : null}
        <h1 className="text-center">Cadastrar Livro</h1>
        <FormGroup row>
          <Label sm={2}>Nome</Label>
          <Col sm={10}>
            <Controller
              as={<Input type="text" placeholder="Nome do livro" />}
              name="name"
              control={control}
              rules={{ required: { value: true, message: 'Please provide a name' } }}
            />
            <ErrorMessage as={<Alert color="danger"></Alert>} errors={errors} name="name">
              {({ messages }) =>
                messages &&
                Object.entries(messages).map(([type, message]) => (
                  <Alert color="danger" key={type}>
                    {message}
                  </Alert>
                ))
              }
            </ErrorMessage>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>Autor</Label>
          <Col sm={10}>
            <Controller
              as={<Input type="text" placeholder="Nome do autor" />}
              name="author"
              control={control}
              rules={{ required: { value: true, message: 'Please provide a author name' } }}
            />
            <ErrorMessage as={<Alert color="danger"></Alert>} errors={errors} name="author">
              {({ messages }) =>
                messages &&
                Object.entries(messages).map(([type, message]) => (
                  <Alert color="danger" key={type}>
                    {message}
                  </Alert>
                ))
              }
            </ErrorMessage>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>Genêro</Label>
          <Col sm={10}>
            <Controller
              as={<Input type="text" placeholder="Gênero do livro" />}
              name="genre"
              control={control}
              rules={{ required: { value: true, message: 'Please provide a genre' } }}
            />
            <ErrorMessage as={<Alert color="danger"></Alert>} errors={errors} name="genre">
              {({ messages }) =>
                messages &&
                Object.entries(messages).map(([type, message]) => (
                  <Alert color="danger" key={type}>
                    {message}
                  </Alert>
                ))
              }
            </ErrorMessage>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>Editora</Label>
          <Col sm={10}>
            <Controller
              as={<Input type="text" placeholder="Editora" />}
              name="publisher"
              control={control}
              rules={{ required: { value: true, message: 'Please provide a publisher' } }}
            />
            <ErrorMessage as={<Alert color="danger"></Alert>} errors={errors} name="publisher">
              {({ messages }) =>
                messages &&
                Object.entries(messages).map(([type, message]) => (
                  <Alert color="danger" key={type}>
                    {message}
                  </Alert>
                ))
              }
            </ErrorMessage>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>Quantidade</Label>
          <Col sm={10}>
            <Controller
              as={<Input type="number" placeholder="Quantidade de livros a serem vendidos..." />}
              name="quantity"
              control={control}
              rules={{
                required: { value: true, message: 'Please provide a quantity' },
                min: { value: 1, message: 'Please provide at leat 1 book to sell' },
              }}
            />
            <ErrorMessage as={<Alert color="danger"></Alert>} errors={errors} name="quantity">
              {({ messages }) =>
                messages &&
                Object.entries(messages).map(([type, message]) => (
                  <Alert color="danger" key={type}>
                    {message}
                  </Alert>
                ))
              }
            </ErrorMessage>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>Preço</Label>
          <Col sm={10}>
            <Controller
              as={<Input type="number" placeholder="Enter a price" />}
              name="price"
              control={control}
              rules={{
                required: { value: true, message: 'Please provide a price' },
                min: { value: 0, message: 'A price must be greater than R$0' },
              }}
            />
            <ErrorMessage as={<Alert color="danger"></Alert>} errors={errors} name="price">
              {({ messages }) =>
                messages &&
                Object.entries(messages).map(([type, message]) => (
                  <Alert color="danger" key={type}>
                    {message}
                  </Alert>
                ))
              }
            </ErrorMessage>
          </Col>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Descrição</Label>
          <Controller
            as={<Input type="text" placeholder="Enter a description" />}
            name="description"
            control={control}
            rules={{ required: { value: true, message: 'Please provide a description' } }}
          />
          <ErrorMessage as={<Alert color="danger"></Alert>} errors={errors} name="description">
            {({ messages }) =>
              messages && Object.entries(messages).map(([type, message]) => <p key={type}>{message}</p>)
            }
          </ErrorMessage>
        </FormGroup>
        <div className="buttons">
          <Button onClick={() => history.push('/')} color="danger">
            Voltar
          </Button>
          <Button color="primary" type="submit">
            Cadastrar
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Livro;
