 import React, { useState } from 'react'
 import './componente.css';
 
 const Componente = (props) => {

    const [school, setSchool] = useState('DEV.F');

     return (
         <div>
            <h1>Nombre: {props.name}</h1> 
            <h3>Programa: {props.programa} </h3>
            <p>Batch: {props.batch} </p>
            <small> { school } </small>
            <button onClick={() => setSchool('Get Hacky')}>Acción</button>
         </div>
     )
 }
 
 export default Componente
 