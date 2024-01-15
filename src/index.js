import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// OPERADOR ||
console.log(false || {}); // Devuelve {} debido a que el operador OR revisa ambas expresiones. Como la primera es false pasa a la segunda y {} es true.
console.log("string" || true); // Devuelve "string" debido a que para el operador OR "string" es true. Ya no mira la segunda expresión.
console.log([] || 100); // Devuelve [] debido a que el operador OR un array es true.
console.log(null || "Prueba"); // Devuelve "Prueba" porqué para el operador OR null es false y seguidamente pasa a validar la segunda expresión.
console.log("" || true); // Devuelve TRUE porqué para el operador OR un string vacío "" es false. Seguidamente pasa a validar la segunda expresión.
console.log(undefined || false); // Devuelve FALSE porqué para el operador OR undefined es false. Seguidamente pasa a validar la segunda expresión que es FALSE.

// Operador &&
console.log(false && {}); // Devuelve FALSE debido a que para el operador && si ya hay un false, el resto es false.
console.log("string" && true); // Devuelve TRUE debido a que "string" es TRUE y el operador && para a revisar la segunda expresión que es true y se queda con esta.
console.log([] && 100); //Devuelve 100 debido a que la primera expresión es TRUE para el operador && y al revisar la segunda que es TRUE también se queda con esa expresión.
console.log(null && "Prueba"); // Devuelve NULL porque null ya es false para el operador &&.
console.log("" && true); // Devuelve un string vacío "" que es false para && y no sigue con la siguiente expresión.
console.log(undefined && false); //Devuelve FALSE porqué undefined es falso para el operador && y verifica la siguiente expresión.

// Operador ??
console.log(false ?? {}); // Devolverá FALSE porqué no es ni null, ni undefined y para el operador ?? evalua solo la segunda expresión si la primera es null o undefined.
console.log("string" ?? true); // Devolverá "string" porqué la primera expresión no es ni null, ni undefined.
console.log([] ?? 100); //Devolverá [] porqué la primera expresión no es ni null, ni undefined.
console.log(null ?? "Prueba"); // Devolverá "Prueba" porqué la primera expresión es null.
console.log("" ?? true); // Devolverá string vacío "" porqué la primera expresión no es ni null, ni undefined.
console.log(undefined ?? false); // Devolverá FALSE porqué la primera expresión es undefined.