import React, { Component } from "react";
import api from "../../services/api";
import "./styles.css";

export default class HomePage extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    // Testando api
    const response = await api.get("/books");
    console.log(response.data.data.docs);

    this.setState({ books: response.data.data.docs });
  };

  render() {
    return (
      <div className="books-list">
        {this.state.books.map((book) => (
          <article key={book._id}>
            <strong>{book.name}</strong>
            <p>{book.description}</p>
          </article>
        ))}
      </div>
    );
  }
}
