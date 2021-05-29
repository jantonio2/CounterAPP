import PropTypes from 'prop-types';
import { useState } from 'react';

const CounterApp = ({value}) => {

  const [counter, setCounter] = useState(0);

  // handleAdd
  const handleAdd = () => {
    setCounter(counter + 1);
    // setCounter( (c) => c + 1 );
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2> { counter } </h2>
     {/* Cuando ponemos () nos saldra undefined al renderizar. Se esta pasando como referencia */}
      <button onClick={handleAdd}>+1</button>
    </>
  );
}

CounterApp.propTypes = {
  value: PropTypes.number
}

CounterApp.defaultProps = {
  value: 350
}

export default CounterApp;