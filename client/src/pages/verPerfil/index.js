import React, { useState, useEffect, useContext } from "react";
import { Button } from "reactstrap";
import { UserContext } from "../../contexts/UserContext";

import api from "../../services/api";

import "./styles.css";

function VerPerfil() {
  const [user, setUser] = useState({});
  const userContext = useContext(UserContext);
  useEffect(() => {
    async function fetchData() {
      const response = await api.get("/user/getMe", {
        headers: { authorization: `Bearer ${userContext.user}` },
      });
      console.log(response);
    }
    fetchData();
  });

  return (
    <div className="perfil">
      <section>
        <strong>Perfil</strong>
      </section>
    </div>
  );
}

export default VerPerfil;
