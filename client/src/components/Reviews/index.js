import React, { useState, useEffect } from 'react';

import { Container, Row, Col } from 'reactstrap';
import api from '../../services/api';

const Reviews = ({ bookId, reload }) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await api.get(`/books/${bookId}/reviews`);
        setReviews(response.data.data.docs);
      } catch (error) {
        console.log(error.response);
      }
    })();
  }, [reload , bookId]);

  return reviews.map((review) => (
    <Container style={{ border: '2px solid #7b4397',  margin: '10px 0', padding: '10px' }}>
      <Row>
        <Col>
          <p>Review : {review.review}</p>
        </Col>
        <Col>
          <p> Rating : {review.rating}</p>
        </Col>
      </Row>
      <Row>
        <Col>Author : {review.user.username}</Col>
      </Row>
    </Container>
  ));
};

export default Reviews;
