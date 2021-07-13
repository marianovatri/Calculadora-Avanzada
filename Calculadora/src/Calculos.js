import "/Calculadora Avanzada/calculadora/src/App"



function Suma() {
    setDatos(parseFloat(datos.num1)+parseFloat(datos.num2))
  
}

function Resta() {
    setDatos(parseFloat(datos.num1)-parseFloat(datos.num2))
  
}

function Multiplicacion() {

    setDatos(parseFloat(datos.num1)*parseFloat(datos.num2))

}

function Division() {

    setDatos(parseFloat(datos.num1)/parseFloat(datos.num2))

}




export  { Suma,Resta,Multiplicacion,Division}