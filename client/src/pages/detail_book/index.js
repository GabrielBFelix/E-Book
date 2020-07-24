import React, { useState, useEffect, useContext } from 'react';
import { loadStripe } from '@stripe/stripe-js';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

import Book from '../../components/Book';

import { UserContext } from '../../contexts/UserContext';

import { useParams } from 'react-router-dom';
import { Spinner, Row, Button, Container, Col, Input, Alert } from 'reactstrap';

import api from '../../services/api';
import Reviews from '../../components/Reviews';

const stripePromise = loadStripe(
  'pk_test_51H6qjWKG6owRZi3iITen6xSLl6rmh8miEJVJHF3BA35HTBAFV5lY8A897sQBdFxJCYuQeJqOsaa2MWT5A6baioBG00044ybSDm'
);

const DetailBook = (props) => {
  const [book, setBook] = useState({});
  const [wishList, setWishList] = useState('');
  const [reload, setReload] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [reviewObj, setReviewObj] = useState({ rating: 0, review: '' });
  const [reviewError , setReviewError] = useState(null);
  const userContext = useContext(UserContext);
  const params = useParams();

  console.log(book);

  const handleBuyClick = async (event) => {
    event.preventDefault();

    if (!userContext.user) return;

    const response = await api.post(
      '/booking/checkout-session',
      { book },
      {
        headers: {
          authorization: `Bearer ${userContext.user}`,
        },
      }
    );

    const sessionId = response.data.session.id;

    const stripe = await stripePromise;

     await stripe.redirectToCheckout({
      sessionId,
    });
  };

  const handleCommentClick = async (event) => {
    try {
      const response = await api.post(
        `/books/${params.id}/reviews`,
        { ...reviewObj, book: params.id },
        {
          headers: {
            authorization: `Bearer ${userContext.user}`,
          },
        }
      );  
        setReviewError(null);
      setReload((state) => !state)
      console.log(response);
    } catch (apiError) {
      setReviewError(apiError.response.data.message)
      console.log(apiError.response);
    }
  };

  const handleWishClick = async () => {
    setWishList(params.id);
    const response = await api.post('/user/wishlist', {item: params.id}, { headers: { authorization: `Bearer ${userContext.user}` } })
    console.log(response)
  };
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await api.get(`/books/${params.id}`);
        setBook(data.data.doc[0]);
        setIsLoading(false);
      } catch (apiError) {
        setIsLoading(false);
        setError(true);
        console.log(apiError);
      }
    }
    fetchData();
  }, [reload, params.id]);

  return isLoading ? (
    <Row style={{ justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
      <Spinner></Spinner>
    </Row>
  ) : error ? (
    <p>Você não tem autorização</p>
  ) : (
    <Container style={{ border: '1px solid #ddd', display: 'flex', flexDirection: 'column', padding: '10px' }}>
      <Book book={book}></Book>
      <Button color="primary" onClick={handleBuyClick}>
        Comprar
      </Button>
      <Button color="success" style={{marginTop: '10px'}} onClick={handleWishClick}>
        Adicionar a lista de desejos
      </Button>
      {reviewError && <Alert color='danger'>{reviewError}</Alert>}
      <Row>
        <Col sm={10}>
          Review :
          <textarea
            style={{ margin: '10px', width: '100%' }}
            value={reviewObj.review}
            onChange={(event) => setReviewObj({ ...reviewObj, review: event.target.value })}
          ></textarea>
        </Col>
      </Row>
      <Row>
        <Col style={{ display: 'flex', flexDirection:'column', justifyContent: 'center' }}>
          <span> Rating : </span>
          <Input
            type="number"
            min={0}
            max={10}
            value={reviewObj.rating}
            onChange={(event) => setReviewObj({ ...reviewObj, rating: event.target.value })}
          ></Input>
        </Col>
      </Row>
      <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Button style={{margin: '10px'}} onClick={handleCommentClick}> Commentar </Button>
      </Row>
      <Reviews reload={reload} bookId={book.id}></Reviews>
    </Container>
  );
};

export default DetailBook;
