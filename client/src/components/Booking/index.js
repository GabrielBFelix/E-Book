import React from 'react';

import { Container, Row, Col } from 'reactstrap';

const Booking = ({ booking }) => {
  console.log(booking);

  return (
    <Container style={{ border: '2px solid #000', padding: '2rem', margin: '10px auto' }}>
      <Row style={{ margin: '20px' }}>
        <Col> Email da compra :{booking.user.email}</Col>
        <Col>Preço total da compra : {booking.price}</Col>
      </Row>

      <Row style={{ margin: '20px' }}>
        <Col>Livro : {booking.book.name}</Col>
        <Col>Data de compra :{new Date(booking.createdAt).toLocaleDateString('pt-br')}</Col>
      </Row>
    </Container>
  );
};

export default Booking;
