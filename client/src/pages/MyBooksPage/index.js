import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { Container } from 'reactstrap';
import Book from '../../components/Book';

import api from '../../services/api';
const MyBooksPage = () => {
  const [myBooks, setMyBooks] = useState([]);
  const userContext = useContext(UserContext);
  const location = useLocation();
  useEffect(() => {
    (async () => {
      try {
        const response = await api.get(`/user/${userContext.user}/books`, {
          headers: {
            authorization: `Bearer ${userContext.user}`,
          },
        });
        setMyBooks(response.data.data.docs);
        console.log(response.data);
      } catch (error) {
        console.log(error.response);
      }
    })();
  }, []);

  return (
    <Container>
      {myBooks.map((book) => (
        <Link style={{ textDecoration: 'none' }} to={`${location.pathname}/${book.id}`}>
          <Book book={book} style={{ margin: '10px' }} key={book.id} />
        </Link>
      ))}
    </Container>
  );
};

export default MyBooksPage;
