import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { Button, Form, Alert } from 'reactstrap';
import { useForm } from 'react-hook-form';

import './styles.css';

import CustomInput from '../../components/Input';

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
      await api.post('/books', { ...data }, { headers: { authorization: `Bearer ${userContext.user}` } });

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
        <CustomInput
          label="name"
          type="text"
          name="name"
          text="Nome do livro"
          defaultValue=""
          placeholder="Enter the name of the book"
          control={control}
          errors={errors}
          rules={{ required: { value: true, message: 'This field is required' } }}
        />
        <CustomInput
          label="author"
          type="text"
          name="author"
          text="Author"
          defaultValue=""
          placeholder="Enter the name of the author"
          control={control}
          errors={errors}
          rules={{ required: { value: true, message: 'This field is required' } }}
        />
        <CustomInput
          label="genre"
          type="text"
          name="genre"
          text="Genero do livro"
          defaultValue=""
          placeholder="Enter the genre of the book"
          control={control}
          errors={errors}
          rules={{ required: { value: true, message: 'This field is required' } }}
        />
        <CustomInput
          label="publisher"
          type="text"
          name="publisher"
          text="Nome da editor"
          defaultValue=""
          placeholder="Enter the name of the publisher"
          control={control}
          errors={errors}
          rules={{ required: { value: true, message: 'This field is required' } }}
        />
        <CustomInput
          label="quantity"
          type="number"
          name="quantity"
          text="Quantidade de livros"
          defaultValue={0}
          placeholder="Enter the quantity"
          control={control}
          errors={errors}
          rules={{
            required: { value: true, message: 'Please provide a quantity' },
            min: { value: 1, message: 'Please provide at leat 1 book to sell' },
          }}
        />

        <CustomInput
          label="price"
          type="number"
          name="price"
          text="Preço do livro"
          defaultValue={0}
          placeholder="Enter the price"
          control={control}
          errors={errors}
          rules={{
            required: { value: true, message: 'Please provide a price' },
            min: { value: 1, message: 'A price must be greater than R$0' },
          }}
        />

        <CustomInput
          label="description"
          type="text"
          name="description"
          text="Descrição do livro"
          defaultValue=""
          placeholder="Enter the description"
          control={control}
          errors={errors}
          rules={{
            required: { value: true, message: 'Please provide a description' },
          }}
        />

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
