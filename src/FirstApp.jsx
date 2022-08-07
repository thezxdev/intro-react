// yarn add prop-types
import PropTypes from 'prop-types';

const newMessage = {
	message: 'Hola mundo',
	title: 'jsjsj'
};

const getValue = () => {
	return 'sssss';
}

// props = objeto

export const FirstApp = ( { title, subTitle } ) => {

  // console.log( props );
	
	// Si no se cambia el valor o si no tiene una relacion con algun hook no se recomienda tener valores dentro de los componentes
	// const newMessage = 'zxzx';

  return (
    // <> </> Fragment | Envoltorio, similar a un div pero sin poder usar estilos


    <>
			<h1>{ title }</h1>
      {/* <code>{ JSON.stringify( newMessage ) }</code> */}
      {/* <p>{ subTitle + 1 }</p> */}
    </>
  );
}

// Definir el tipo de las propiedades
FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number.isRequired
}