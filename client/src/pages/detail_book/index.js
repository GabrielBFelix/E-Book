import React, { useState, useEffect } from "react";
import api from "../../services/api";

const DetailBook = (props) => {
  const [book, setBook] = useState({});
  const saved_token = localStorage.getItem("token");

  useEffect(() => {
    async function fetchData() {
      const { id } = props.match.params;
      const response = await api.get(`/books/${id}`, {
        headers: { authorization: `Bearer ${saved_token}` },
      });
      console.log(response);
    }
    fetchData();
  });

  return (
    <div className="container">
      <h1>Book</h1>
      <div className="book">
        <div className="book-detail"></div>
        <div className="payment"></div>
      </div>
      <div className="coments">
        <section></section>
      </div>
    </div>
  );
};

export default DetailBook;
