//Herencia => capacidad de crear funciones y que otros la hereden

import React from "react";

class Clase extends React.Component{
    //Reescribimos el codigo padre
    render(){
        return(
            <div>
                Hola desde una clase en React!
            </div>
        )
    }
}

export default Clase;

