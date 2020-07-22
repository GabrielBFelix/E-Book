import React, { useState, useEffect, useContext } from 'react';

import Book from '../../components/Book';

import { UserContext } from '../../contexts/UserContext';

import { useParams } from 'react-router-dom';
import { Spinner, Row } from 'reactstrap';

import api from '../../services/api';

const DetailBook = (props) => {
  const [book, setBook] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const userContext = useContext(UserContext);
  const params = useParams();
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } =  await api.get(`/books/${params.id}`, {
          headers: { authorization: `Bearer ${userContext.user}` },
        });
        setBook(data.data.doc[0]);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(true);
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return isLoading ? (
    <Row style={{ justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
      <Spinner></Spinner>
    </Row>
  ) : error ? (
    <p>Você não tem autorização</p>
  ) : (
    <Book book={book} />
  );
};

export default DetailBook;
