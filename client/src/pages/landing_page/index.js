import React, { Component } from "react";
import api from "../../services/api";
import "./styles.css";

export default class HomePage extends Component {
  render() {
    return (
      <div className="books-list">
        <article>
          <strong>A menina que roubava livros</strong>
          <p>
            The Book Thief é um drama do escritor australiano Markus Zusak,
            publicado em 2005 pela editora Picador. No Brasil e em Portugal, foi
            lançado pela Intrínseca e a Presença, respectivamente. O livro é
            sobre Liesel Meminger, uma garota que encontra a Morte três vezes
            durante 1939–43 na Alemanha nazista.
          </p>
        </article>
      </div>
    );
  }
}
