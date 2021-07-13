import React, { useState } from 'react';
import './App.css';
import {Suma,Resta, Multiplicacion,Division} from './Calculos';


function App() {
 

  const [datos, setDatos] = useState({
    num1: "0" ,
    num2: "0" 
  })

  const handleInput = (valor) => {
    setDatos({...datos, [valor.target.name] : valor.target.value })
  }

  
  
  return (
    
    <div className="App">
     
             
                  
       
       
       <label>Calculadora Avanzada</label> 

       <form >

          <div >
              <input type="number" placeholder="0" onChange={handleInput} name="num1"></input>
              <button type="reset" >Clear</button>
          </div>

          <div >
              <input type="number" placeholder="0" onChange={handleInput} name="num2"></input>
              <button type="reset" >Clear</button>
          </div>

          <h2>Calculadora en base a los 2 inputs: </h2>
           <p>la suma es = {Suma}  </p>
           <p>La resta es = {Resta}   </p>
           <p>La multiplicacion es = {Multiplicacion}   </p>
           <p>La division es =  {Division}  </p>
           <p>La potencia es =  </p>
           <p>La raiz cuadrada es =  </p>
           <p>La hipotenusa es =  </p>


        </form>


    
    </div>
    
    
  );
  

  
  }
  
 
export default  App

