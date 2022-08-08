import { useState } from 'react';
import PropTypes from 'prop-types';

// Cuando la funcion no hace uso de ningun valor dentro del componente es recomendable ponerlo afuera del mismo.
// const handleAdd = ( e ) => {
//   console.log( e );
// }

export const CounterApp = ({ value }) => {

  // Hook useState       |      v valor inicial
  const [ counter, setCounter ] = useState( value );

  const handleAdd = () => {
    // setCounter( counter + 1 );
    // Si no se tiene el valor del State
    setCounter( (c) => c + 1 );
  }

  const handleSubstract = () => {
    setCounter( counter - 1 );
  }

  const handleReset = () => {
    setCounter( value );
  }

  return (
    <>
      <h1>CounterApp</h1>
      <h2> { counter } </h2>

      <button onClick={ handleAdd }> + 1 </button>
      <button onClick={ handleSubstract } > - 1 </button>
      <button onClick={ handleReset }> Reset </button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
}