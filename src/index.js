// import ReactDOM from 'react-dom';
// import PrimeraApp from './PrimeraApp';

// import './index.css';


// const divRoot = document.querySelector('#root');

// ReactDOM.render(<PrimeraApp saludo = "Hola, Soy Antonio"/>, divRoot);

import ReactDOM from 'react-dom';

import './index.css';
import CounterApp from './CounterApp';

const divRoot = document.querySelector('#root');

// document.body.append(saludo);

ReactDOM.render(<CounterApp />, divRoot);