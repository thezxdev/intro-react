
const newMessage = {
	message: 'Hola mundo',
	title: 'jsjsj'
};

const getValue = () => {
	return 'sssss';
}

export const FirstApp = () => {
	
	// Si no se cambia el valor o si no tiene una relacion con algun hook no se recomienda tener valores dentro de los componentes
	// const newMessage = 'zxzx';

  return (
    // <> </> Fragment | Envoltorio, similar a un div pero sin poder usar estilos


    <>
			<h1>{ getValue() }</h1>
      {/* <code>{ JSON.stringify( newMessage ) }</code> */}
      <p>Soy un subtitulo</p>
    </>
  );
}
