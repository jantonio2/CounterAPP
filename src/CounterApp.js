import PropTypes from 'prop-types';

const CounterApp = ({value}) => {

  // handleAdd
  const handleAdd = (e) => {
    console.log(e);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2> { value } </h2>
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