function Imagen(){
    return(
        <div>
            <img src="https://www.lacucurucha.com.ar/circuito/images/usuario.jpeg" />
        </div>
    )
}


//Funcion Flecha
const Parrafo = () => <p>Parrafo</p>


export default function Funciones(){
    return(
        <div>
            <h1>Titulo</h1>
            <Parrafo/>
            <Imagen/>
        </div>
    );
}