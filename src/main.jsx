import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';
// import { FirstApp } from './FirstApp';
// import { HelloWorldApp } from './HelloWorldApp';

// Importar estilos globales
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		{/* Paso de valores a un componente con props */}
		{/* <FirstApp subTitle={ 12 } /> */}
		<CounterApp value={ 3 } />
	</React.StrictMode>
)