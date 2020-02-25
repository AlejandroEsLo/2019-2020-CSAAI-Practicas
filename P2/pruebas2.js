console.log("Ejecutando JS...");

let resultado_final = 0;//let => variable local
/////////////////////////////////////////////////////////////////
//-- Crear objeto gui, con los elementos de la interfaz gráfica
//-- Al tenerlo agrupado podemos pasarlo como parámetro o asignárselo
//-- a otro objeto
const gui = {
  display: document.getElementById("display"),
  boton: document.getElementById("boton"),
}

//-- Objeto contador: Contiene el valor y el método para incrementarse
const counter = {
  valor: 0,
  inc : function(value) {
    this.valor += value;
    gui.display.innerHTML = this.valor;
  }
}

//-- Acciones: Ligar el boton al contador
gui.boton.onclick = () => {
  counter.inc(1)
}
/////////////////////////////////////////////////////////////////////

////// DETECTAMOS BOTON ELEGIDO //////
const botones = document.getElementsByClassName("boton")
//-- Función de retrollamada de los botones
//-- botones de la clase dígito
function digito(value){
  console.log("Valor: " + value);
}

//-- Establecer la funcion de llamada del boton i
//-- El parámetro ev.target contiene el boton
//-- que ha recibido el click
for (i=0; i<botones.length; i++) {
  botones[i].onclick = (ev) => {
    digito(ev.target.value)
  }
}
///////////////////////////////////////
