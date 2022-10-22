import React from 'react';
import ReactDOM from 'react-dom/client';
import Clase from './Clase';
import Funciones from './Funciones';
import HolaMundo from './HolaMundo';

/* const elemento = document.createElement("h1");
elemento.innerText = "Hola Mundo Desde JS Basico";
const contenedor = document.getElementById("root");
contenedor.appendChild(elemento); */


const root = ReactDOM.createRoot(document.getElementById('root'));
// (que, donde)
 root.render(
  //<h1>Hola Mundo</h1>,
  <p> 
    <HolaMundo/>
    <Funciones/>
    <Clase/>
    
  </p>,
  document.getElementById("root")
); 



