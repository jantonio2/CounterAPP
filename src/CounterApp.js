import PropTypes from 'prop-types';
import { useState } from 'react';

const CounterApp = ({value = 10}) => {

  const [counter, setCounter] = useState(value);

  // handleAdd
  const handleAdd = () => {
    setCounter(counter + 1);
    // setCounter( (c) => c + 1 );
  };

  // handleReset
  const handleReset = () => {
    setCounter(value);
  };

  // handleReset
  const handleSubtract = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2> { counter } </h2>
     {/* Cuando ponemos () nos saldra undefined al renderizar. Se esta pasando como referencia */}
      <button onClick={handleAdd}>Sumar +1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSubtract}>Restar -1</button>
    </>
  );
}

CounterApp.propTypes = {
  value: PropTypes.number
}

CounterApp.defaultProps = {
  value: 10
}

export default CounterApp;