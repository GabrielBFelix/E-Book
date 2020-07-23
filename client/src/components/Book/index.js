import React from 'react';

import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const Book = ({ book, children }) => {
  return (
    <article>
      <Row style={{ justifyContent: 'center' }}>
        <strong>{book.name}</strong>
      </Row>
      <p align="justify">{book.description}</p>
      <p>Autor: {book.author}</p>
      <p>Genero: {book.genres}</p>
      {children}
    </article>
  );
};

export default Book;
