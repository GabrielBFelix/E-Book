import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';

import Book from '../../components/Book';

export default class HomePage extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    // Testando api
    const response = await api.get('/books');
    console.log(response.data.data.docs);

    this.setState({ books: response.data.data.docs });
  };

  render() {
    return (
      <div className="books-list">
        {this.state.books.map((book) => (
          <Book book={book} />
        ))}
      </div>
    );
  }
}
