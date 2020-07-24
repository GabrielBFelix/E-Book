import React, { Component } from 'react';

import { Link } from 'react-router-dom';

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
          <div key={book._id}>
            <Book book={book}>
              <Link style={{color : '#fff', textDecoration: 'none', border: '1px solid #614385', padding : '10px' , backgroundColor: '#000428'}} to={`/books/${book._id}`}> Ver detalhes</Link>
            </Book>
          </div>
        ))}
      </div>
    );
  }
}
