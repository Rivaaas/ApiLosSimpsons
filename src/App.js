import React, { useState, useEffect} from "react";
import "./App.css";

import { Button } from "react-bootstrap";
import Personaje from "./Components/Personaje/Index";
import Boton from "./Components/Boton/Index"
function App() {
  const [personaje, guardarPersonaje] = useState();

  const consultarApi = async () => {
    const api = await fetch("https://simpsons-quotes-api.herokuapp.com/quotes");
    const personaje = await api.json();
    guardarPersonaje(personaje[0]);
  };

  useEffect( () =>{
    consultarApi()
  }, {}) 
  return (
    <>
      <div className="container ">
        <div className="d-flex justify-content-center">
          <Personaje personaje={personaje} />
        </div>

        <div className="row justify-content-center">
          <div className="col-sm-4 d-flex justify-content-center">
          
            <Boton/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
