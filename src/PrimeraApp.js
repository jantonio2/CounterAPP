// import { Fragment } from "react";
import PropTypes from 'prop-types';

// FC Functional Components
const PrimeraApp = ({saludo}) => {
  // No se imprime booleanos
  // Concatena los arrays
  // No se puede imprimir objetos
  // const saludo = {
  //   nombre: 'Antonio',
  //   edad: 21
  // };
  // const saludo = 'Hola Mundo';

  // if(!saludo){
  //   throw new Error('El saludo es necesario');
  // }

  return (
    <>
      <h1>{saludo}</h1>
      {/* <h1>{JSON.stringify(saludo)}</h1> */}
      {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
      <p>Mi primera aplicación</p>
    </>
  );
    
  // return (
  //   <div>
  //     <h1>Hola Mundo</h1>
  //     <p>Mi primera aplicación</p>
  //   </div>
  // );
    
  // return (
  //   <Fragment>
  //     <h1>Hola Mundo</h1>
  //     <p>Mi primera aplicación</p>
  //   </Fragment>
  // );
}

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired
}

export default PrimeraApp;