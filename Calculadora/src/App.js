import React, {useEffect,useState } from 'react';
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
  const [cuad, setCuad] = useState()
  const [pot, setPot] = useState()
  const [hyp, setHyp] = useState()
 

  function clear1 () {
    setDatos({
      ...datos, num1 : 0
    })
    return
  }
 

  function clear2 () {
    setDatos({
      ...datos, num2 : 0
    })
    return
  }
  
  

 useEffect(()=>{
    const { num1, num2 } = datos
    setSuma((Number(num1) || 0) + (Number(num2) || 0))
    setResta((Number(num1) || 0) - (Number(num2) || 0))
    setMult((Number(num1) || 0) * (Number(num2) || 0))
    setDiv((Number(num1)) / (Number(num2)))
    setCuad(Math.sqrt(((num1 * num1)|| 0) + ((num2 * num2)|| 0)))
    setPot(Math.pow(num1 || 0, num2 || 0))
    setHyp(Math.hypot(num1 || 0, num2 || 0))
      
    
  },[datos])

  
  function handleInput(e) {
    setDatos({...datos, [e.target.name] : e.target.value })
  }

  
  return (
    
    <div className="App">
     
             
                  
       
     <label>Calculadora Avanzada</label> 
      
      <div className="contenedor">
        <form >

          <div className="Calculo" >
              <input type="number" onChange={handleInput} name="num1"></input>
              <button type="reset"  onClick={clear1} >Clear</button>
          </div> 

        </form>

        <form >
          <div className="Calculo">
              <input  type="number"  onChange={handleInput} name="num2"></input>
              <button type="reset"  onClick={clear2} >Clear</button>
          </div>
          </form>
      </div>
         
          <h2>Calculadora en base a los 2 inputs: </h2>
           <p>la suma es = {suma}  </p>
           <p>La resta es = {resta}    </p>
           <p>La multiplicacion es = {mult}    </p>
           <p>La division es =  {div}   </p>
           <p>La potencia es = {pot}   </p>
           <p>La raiz cuadrada es =  {cuad}  </p>
           <p>La hipotenusa es = {hyp}  </p>

       

    
    </div>
    
    
  );
  
  
  }
  
 
export default  App