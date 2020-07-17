import React from "react";
import { Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

import "./styles.css";

const Livro = () => {
  return (
    <div className="forms">
      <Form className="book-form">
        <h1 className="text-center">Cadastrar Livro</h1>
        <FormGroup row>
          <Label sm={2}>Nome</Label>
          <Col sm={10}>
            <Input type="text" placeholder="Nome do livro"></Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>Autor</Label>
          <Col sm={10}>
            <Input type="text" placeholder="Nome do autor" id></Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>Genêro</Label>
          <Col sm={10}>
            <Input type="text" placeholder="Gênero"></Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>Editora</Label>
          <Col sm={10}>
            <Input type="text" placeholder="Editora"></Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>Quantidade</Label>
          <Col sm={10}>
            <Input type="number" placeholder="Quantidade"></Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2}>Imagem do Livro</Label>
          <Col sm={10}>
            <Input type="url" placeholder="URL da imagem do livro"></Input>
          </Col>
        </FormGroup>
        <div className="buttons">
          <Button color="danger">Cancelar</Button>
          <Button color="primary">Cadastrar</Button>
        </div>
      </Form>
    </div>
  );
};

export default Livro;
