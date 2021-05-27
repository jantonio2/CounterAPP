import ReactDOM from 'react-dom';

const saludo = <h1>Hola Mundo</h1>;

const divRoot = document.querySelector('#root');

// document.body.append(saludo);

ReactDOM.render(saludo, divRoot);