import React, { useState, useEffect, useContext } from 'react';
import { loadStripe } from '@stripe/stripe-js';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

import Book from '../../components/Book';

import { UserContext } from '../../contexts/UserContext';

import { useParams } from 'react-router-dom';
import { Spinner, Row, Button } from 'reactstrap';

import api from '../../services/api';

const stripePromise = loadStripe(
  'pk_test_51H6qjWKG6owRZi3iITen6xSLl6rmh8miEJVJHF3BA35HTBAFV5lY8A897sQBdFxJCYuQeJqOsaa2MWT5A6baioBG00044ybSDm'
);

const DetailBook = (props) => {
  const [book, setBook] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const userContext = useContext(UserContext);
  const params = useParams();

  const handleClick = async (event) => {
    event.preventDefault();

    if (!userContext.user) return;

    const response = await api.post('/booking/checkout-session', { book } , {
      headers : {
        'authorization' : `Bearer ${userContext.user}`
      }
    });

    const sessionId = response.data.session.id

    const stripe = await stripePromise;

    const { error } = await stripe.redirectToCheckout({
      sessionId,
    });
  };
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await api.get(`/books/${params.id}`);
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
    <>
      <Book book={book}></Book>
      <Button color="primary" onClick={handleClick}>
        Checkout
      </Button>
    </>
  );
};

export default DetailBook;
