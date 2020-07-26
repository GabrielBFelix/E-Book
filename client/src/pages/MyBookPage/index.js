import React, { useState, useEffect, useContext } from 'react';
import {
  Button,
  Row,
  Spinner,
  Form,
  FormGroup,
  Input,
  Label,
  Col,
} from 'reactstrap';
import { useParams, useHistory } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

import api from '../../services/api';

import './styles.css';

const MyBookPage = () => {
  const [quantity, setQuantity] = useState('');
  const [genre, setGenres] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const userContext = useContext(UserContext);
  const params = useParams();
  const history = useHistory();
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await api.get(`/books/${params.bookId}`);
        const { quantity, genre, price, description } = data.data.doc[0];
        console.log(quantity);
        setQuantity(quantity);
        setGenres(genre);
        setPrice(price);
        setDescription(description);
        setIsLoading(false);
      } catch (apiError) {
        setIsLoading(false);
        setError(true);
        console.log(apiError);
      }
    }
    fetchData();
  }, [userContext.user]);

  const handleSubmit = async () => {
    try {
      const result = await api.patch(
        `/books/${params.bookId}`,
        { quantity, genre, price, description },
        { headers: { authorization: `Bearer ${userContext.user}` } }
      );
      console.log(result);
      history.push('/myBooks');
    } catch (apiError) {
      console.log(apiError.response);
      setError(apiError.response.data.message);
    }
  };

  return isLoading ? (
    <Row
      style={{ justifyContent: 'center', alignItems: 'center', height: '90vh' }}
    >
      <Spinner></Spinner>
    </Row>
  ) : error ? (
    <p>Error</p>
  ) : (
    <div className='livro'>
      <section>
        <h3 className='text-center'>Book Information</h3>
        <Form className='edit-form'>
          <FormGroup row>
            <Label sm={2}>Quantidade</Label>
            <Col sm={10}>
              <Input
                type='number'
                min='1'
                value={quantity}
                onChange={(event) => setQuantity(event.target.value)}
              ></Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Gênero</Label>
            <Col sm={10}>
              <Input
                type='text'
                value={genre}
                onChange={(event) => setGenres(event.target.value)}
              ></Input>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={2}>Preço</Label>
            <Col sm={10}>
              <Input
                type='number'
                min='1'
                value={price}
                onChange={(event) => setPrice(event.target.value)}
              ></Input>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={2}>Descrição</Label>
            <Col sm={10}>
              <Input
                type='textarea'
                value={description}
                rows='15'
                onChange={(event) => setDescription(event.target.value)}
              ></Input>
            </Col>
          </FormGroup>
        </Form>
        <div className='buttons-profile'>
          <Button color='primary' onClick={handleSubmit}>
            Salvar alterações
          </Button>
        </div>
      </section>
    </div>
  );
};

export default MyBookPage;
