import React, { useState } from "react";
import "./App.css";

import { Button } from "react-bootstrap";
import Personaje from "./Components/Personaje/Index";
function App() {
  const [personaje, guardarPersonaje] = useState();

  const consultarApi = async () => {
    const api = await fetch("https://simpsons-quotes-api.herokuapp.com/quotes");
    const personaje = await api.json();
    guardarPersonaje(personaje[0]);
  };
  return (
    <>
      <div className="container">
        <div className="div2">
          <Personaje personaje={personaje}/>
        </div>
        <div className="div row">
           <Button
            type="button"
            className="btn btn-warning botonGenerar"
            onClick={consultarApi}
          >
            Generar
          </Button> 
         
        </div>
        
      </div>
    </>
  );
}

export default App;
