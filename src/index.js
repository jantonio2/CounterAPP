import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';

import './index.css';
// import CounterApp from './CounterApp';

const divRoot = document.querySelector('#root');

// document.body.append(saludo);

// ReactDOM.render(<CounterApp value = {123} />, divRoot);
ReactDOM.render(<PrimeraApp saludo = "Hola, Soy Antonio"/>, divRoot);