import PropTypes from 'prop-types';

// Cuando la funcion no hace uso de ningun valor dentro del componente es recomendable ponerlo afuera del mismo.
// const handleAdd = ( e ) => {
//   console.log( e );
// }

export const CounterApp = ({ value }) => {

  const handleAdd = () => {
    value = 1000;
  }

  return (
    <>
      <h1>CounterApp</h1>
      <h2> { value } </h2>

      <button onClick={ handleAdd }>
        + 1
      </button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
}