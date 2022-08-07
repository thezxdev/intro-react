import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';
// import { HelloWorldApp } from './HelloWorldApp';

// Importar estilos globales
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		{/* Paso de valores a un componente con props */}
		<FirstApp subTitle={ 12 } />
	</React.StrictMode>
)