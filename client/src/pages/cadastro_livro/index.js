import React, { useState } from "react";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

import "./styles.css";
import api from "../../services/api";

const Livro = () => {

  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [genres, setGenre] = useState("");
  const [publisher, setPublisher] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const saved_token = localStorage.getItem('token');

  async function handleSubmit() {
    const result = await api.post('/books', { name, author, genres, publisher, quantity, price, description }, { headers: { 'authorization' : `Bearer ${saved_token}` } });
    console.log(result);
  }

  return (
    <div className="forms">
      <Form className="book-form">
        <h1 className="text-center">Cadastrar Livro</h1>
        <FormGroup row>
          <Label sm={2}>Nome</Label>
          <Col sm={10}>
            <Input type="text" placeholder="Nome do livro" value={name} onChange={(event)=>setName(event.target.value)}></Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>Autor</Label>
          <Col sm={10}>
            <Input type="text" placeholder="Nome do autor" value={author} onChange={(event)=>setAuthor(event.target.value)}></Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>Genêro</Label>
          <Col sm={10}>
            <Input type="text" placeholder="Gênero" value={genres} onChange={(event)=>setGenre(event.target.value)}></Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>Editora</Label>
          <Col sm={10}>
            <Input type="text" placeholder="Editora" value={publisher} onChange={(event)=>setPublisher(event.target.value)}></Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>Quantidade</Label>
          <Col sm={10}>
            <Input type="number" placeholder="Quantidade" min="1" value={quantity} onChange={(event)=>setQuantity(event.target.value)}></Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>Preço</Label>
          <Col sm={10}>
            <Input type="number" placeholder="Preço" pattern="^\d*(\.\d{0,2})?$" value={price} onChange={(event)=>setPrice(event.target.value)}></Input>
          </Col>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Descrição</Label>
          <Input type="textarea" placeholder="Descrição do livro..." value={description} onChange={(event)=>setDescription(event.target.value)}  />
        </FormGroup>
        <div className="buttons">
          <Button color="danger">Voltar</Button>
          <Button color="primary" onClick={handleSubmit}>Cadastrar</Button>
        </div>
      </Form>
    </div>
  );
};

export default Livro;
