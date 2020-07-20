import React from "react";
import Routes from "./routes";
import Header from "./components/Header";
import api from "./services/api";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
