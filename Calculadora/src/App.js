import React, {useEffect ,useState } from 'react';
import './App.css';



function App() {
 

  const [datos, setDatos] = useState({
    num1: "0" ,
    num2: "0" 
  })
  const [suma, setSuma] = useState()
  const [resta, setResta] = useState()
  const [mult, setMult] = useState()
  const [div, setDiv] = useState()
 
  

  useEffect(()=>{
    const { num1, num2 } = datos
    setSuma(Number(num1) + Number(num2))
    setResta(Number(num1) - Number(num2))
    setMult(Number(num1) * Number(num2))
    setDiv(Number(num1) / Number(num2))
  },[datos])

  
  const handleInput = (valor) => {
    setDatos({...datos, [valor.target.name] : valor.target.value })
  }

  
  
  return (
    
    <div className="App">
     
             
                  
       
     <label>Calculadora Avanzada</label> 
      
      <div className="contenedor">
        <form >

          <div >
              <input type="number" placeholder="0" onChange={handleInput} name="num1"></input>
              <button type="reset">Clear</button>
          </div>

        </form>

        <form >
          <div className="Calculo">
              <input type="number" placeholder="0" onChange={handleInput} name="num2"></input>
              <button type="reset" >Clear</button>
          </div>
          </form>
      </div>
         
          <h2>Calculadora en base a los 2 inputs: </h2>
           <p>la suma es = {suma}  </p>
           <p>La resta es = {resta}   </p>
           <p>La multiplicacion es = {mult}   </p>
           <p>La division es =  {div}  </p>
           <p>La potencia es =  </p>
           <p>La raiz cuadrada es =  </p>
           <p>La hipotenusa es =  </p>


        


    
    </div>
    
    
  );
  

  
  }
  
 
export default  App