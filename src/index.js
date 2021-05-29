import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';

import './index.css';

const divRoot = document.querySelector('#root');

// document.body.append(saludo);

ReactDOM.render(<PrimeraApp saludo = "Hola Mundo" />, divRoot);