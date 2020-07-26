import React from 'react';

import { Row } from 'reactstrap';

const textStyle = {
  backgroundImage: 'linear-gradient(to right bottom ,#614385 , #516395)',
  color: 'transparent',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
};

const Book = ({ book, children }) => {
  return (
    <article>
      <Row style={{ justifyContent: 'center' }}>
        <strong style={{ ...textStyle, fontSize: '30px' }}>{book.name}</strong>
      </Row>
      <p align="justify" style={textStyle}>
        {book.description}
      </p>
      <p style={{ ...textStyle, fontSize: '30px' }}>Autor: {book.author}</p>
      <p style={{ ...textStyle, fontSize: '20px' }}>Genero: {book.genre}</p>
      <p style={{ ...textStyle, fontSize: '20px' }}>Average Rating : {book.ratingsAverage}</p>
      {children}
    </article>
  );
};

export default Book;
