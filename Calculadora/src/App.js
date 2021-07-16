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
 
  

  const ecuaciones = [
    {
      id: "suma",
      texto: "la suma es = ",
      ecu: suma
    },
    {
      id: "resta",
      texto: "la resta es = ",
      ecu: resta
    },
    {
      id: "mult",
      texto: "la multiplicacion es = ",
      ecu: mult
    },
    {
      id: "div",
      texto: "la division es = ",
      ecu: div
    },
    {
      id: "cuad",
      texto: "la raiz cuadrada es = ",
      ecu: cuad
    },
    {
      id: "pot",
      texto: "la potencia es = ",
      ecu: pot
    },
    {
      id: "hyp",
      texto: "la hipotenusa es = ",
      ecu: hyp
    }
  
    ]

    const [sitio, actSitio] = useState(ecuaciones)
  
    function handleOnDragEnd (posicion) {
      if (!posicion.destination) return;
      const items = Array.from(sitio);
      const [nuevoOrden] = items.splice(posicion.source.index, 1);
      items.splice(posicion.destination.index, 0, nuevoOrden);
  
      actSitio(items);
    }
  
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
    setSuma((Number(num1) ) + (Number(num2) ))
    setResta((Number(num1) ) - (Number(num2) ))
    setMult((Number(num1) ) * (Number(num2) ))
    setDiv((Number(num1)) / (Number(num2)))
    setCuad(Math.sqrt(((num1 * num1)) + ((num2 * num2))))
    setPot(Math.pow(num1 , num2 ))
    setHyp(Math.hypot(num1 , num2 ))
      
    
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
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="ecuaciones">
              {(provided) => (
         
      <ul className="ecuaciones" {...provided.droppableProps} ref={provided.innerRef}>
        {ecuaciones.map(({id,texto,ecu}, index) => {
          return (
            <Draggable key={id} draggableId={id} index={index}>
              {(provided) => (
            <ul {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
              <p>
                {texto}{ecu}
              </p>
            </ul>
              )}
            </Draggable>
          );
        })}
        {provided.placeholder}

      </ul>
      )}
      </Droppable>
          </DragDropContext>
    
    </div>
    
    
  );
  
  
  }
  
 
export default  App