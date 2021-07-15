import React, {useEffect,useState } from 'react';
import './App.css';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"



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
          <DragDropContext>

          <Droppable droppableId="columna1">
           { (provided) => (
           <div className="columna1"
            {...provided.droppableProps}
             ref={provided.innerRef}>
               
          <Draggable key="1" draggableId="1" index="1">
           {(provided) => (
           <p  {...provided.draggableProps} 
           ref={provided.innerRef}
           {...provided.dragHandleProps}>la suma es = {suma}  </p>)}
           </Draggable>

           <Draggable key="2" draggableId="2" index="2">
           {(provided) => (
           <p  {...provided.draggableProps} 
           ref={provided.innerRef}
           {...provided.dragHandleProps}>La resta es = {resta}  </p>)}
           </Draggable>

           <Draggable key="3" draggableId="3" index="3">
           {(provided) => (
           <p  {...provided.draggableProps} 
           ref={provided.innerRef}
           {...provided.dragHandleProps}>La multiplicacion es = {mult}  </p>)}
           </Draggable>

           <Draggable key="4" draggableId="4" index="4">
           {(provided) => (
           <p  {...provided.draggableProps} 
           ref={provided.innerRef}
           {...provided.dragHandleProps}>La division es =  {div}  </p>)}
           </Draggable>
           
           <Draggable key="5" draggableId="5" index="5">
           {(provided) => (
           <p  {...provided.draggableProps} 
           ref={provided.innerRef}
           {...provided.dragHandleProps}>La potencia es = {pot}  </p>)}
           </Draggable>

           <Draggable key="6" draggableId="6" index="6">
           {(provided) => (
           <p  {...provided.draggableProps} 
           ref={provided.innerRef}
           {...provided.dragHandleProps}>La raiz cuadrada es =  {cuad}  </p>)}
           </Draggable>

           <Draggable key="7" draggableId="7" index="7">
           {(provided) => (
           <p  {...provided.draggableProps} 
           ref={provided.innerRef}
           {...provided.dragHandleProps}>La hipotenusa es = {hyp}  </p>)}
           </Draggable>


           {provided.placeholder}
           
           </div>)}
                       
           </Droppable>

           
           
      </DragDropContext>
       

    
    </div>
    
    
  );
  
  
  }
  
 
export default  App