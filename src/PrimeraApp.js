// import { Fragment } from "react";

// FC Functional Components
const PrimeraApp = () => {
  // No se imprime booleanos
  // Concatena los arrays
  // No se puede imprimir objetos
  // const saludo = {
  //   nombre: 'Antonio',
  //   edad: 21
  // };
  const saludo = 'Hola Mundo';

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

export default PrimeraApp;