import React, { useState, useEffect, useContext } from "react";
import { Button, Row, Spinner, Form, FormGroup, Input, Label, Col } from "reactstrap";
import { UserContext } from "../../contexts/UserContext";

import api from "../../services/api";

import "./styles.css";

function VerPerfil() {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState("true");
  const [error, setError] = useState("false");
  const userContext = useContext(UserContext);
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await api.get("/user/getMe", {
          headers: { authorization: `Bearer ${userContext.user}` },
        });
        setUser(data.data.doc);
        setIsLoading(false);
        console.log(data.data.doc);
      } catch (error) {
        setIsLoading(false);
        setError(true);
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return isLoading ? (
    <Row
      style={{ justifyContent: "center", alignItems: "center", height: "90vh" }}
    >
      <Spinner></Spinner>
    </Row>
  ) : (
    <div className="perfil">
      <section>
        <h3 className="text-center">Dados</h3>
        <Form className="edit-form">
          <FormGroup row>
            <Label sm={2}>Nome</Label>
            <Col sm={10}>
                <Input type="text" name ="username" value={user.username}></Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Email</Label>
            <Col sm={10}>
                <Input type="email" name="email"></Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Senha</Label>
            <Col sm={10}>
                <Input type="password" name="password"></Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Confirmar Senha</Label>
            <Col sm={10}>
                <Input type="password" name="passwordConfirm"></Input>
            </Col>
          </FormGroup>
        </Form>
        <div className="buttons">
          <Button>botão</Button>
          <Button>botão</Button>
        </div>
      </section>
    </div>
  );
}

export default VerPerfil;
