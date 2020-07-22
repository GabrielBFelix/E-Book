import React from 'react';

import { Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';

const Book = ({ book }) => {
  return (
    <article>
      <Row style={{justifyContent: 'center'}}>
        <strong>{book.name}</strong>
      </Row>
      <p align="justify">{book.description}</p>
      <p>Autor: {book.author}</p>
      <p>Genero: {book.genres}</p>
      <Link to={`/books/${book._id}`}> Ver detalhes</Link>
    </article>
  );
};

export default Book;
