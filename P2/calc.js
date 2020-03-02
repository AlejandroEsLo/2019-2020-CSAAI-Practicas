console.log("Ejecutando JS...");

const display = document.getElementById('display');
const boton_suma = document.getElementById('boton_suma');
const boton_igual = document.getElementById('boton_igual');
const clear = document.getElementById("clear")

let numero = document.getElementsByClassName('numero')

//// Agrupamos los botones que se refieren a los digitos(0-9)
for (i = 0; i < numero.length; i++) {
  numero[i].onclick = (ev)=>{
    digito(ev.target);
  }
}

/////// funcion comun para todos//////
function digito(boton){
  if (display.innerHTML == 0){
      display.innerHTML = boton.value;
  }else {
    display.innerHTML += boton.value;
  }
}
/////////////////////////////////////



//// Agrupamos las operaciones que se refieren a (+-*/)
/*for (i = 0; i < operador.length; i++) {
  operador[i].onclick = (ev)=>{
    operando(ev.target);
  }
}
*/
/////// funcion comun para todos//////????????????
/*function operando(boton){
  if (display.innerHTML == "+"){
    display.innerHTML += suma.value;
  }else if (display.innerHTML == "-") {
    display.innerHTML += resta.value;
  }else if (display.innerHTML == "/") {
    display.innerHTML += divi.value;
  }else if (display.innerHTML == "*") {
    display.innerHTML += mult.value;
  }
}

*/
//-- Insertar suma
suma.onclick = () => {
  display.innerHTML += suma.value;
  //PRUEBAS
  console.log("resultado: " + display.innerHTML);
}

//-- Insertar resta
resta.onclick = () => {
  display.innerHTML += resta.value;
  //PRUEBAS
  console.log("resultado: " + display.innerHTML);
}

//-- Insertar multiplicacion
mult.onclick = () => {
  display.innerHTML += mult.value;
  //PRUEBAS
  console.log("resultado: " + display.innerHTML);
}

//-- Insertar division
divi.onclick = () => {
  display.innerHTML += divi.value;
  //PRUEBAS
  console.log("resultado: " + display.innerHTML);
}

//-- Insertar decimales
decimales.onclick = () => {
  display.innerHTML += decimales.value;
  //PRUEBAS
  console.log("resultado: " + display.innerHTML);
}

//-- calcular exponencial
exp.onclick = () => {
  display.innerHTML += exp.value;
  //PRUEBAS
  console.log("resultado: " + display.innerHTML);
}
//-- parentesis
par_izq.onclick = () => {
  if (display.innerHTML == 0){
    display.innerHTML += par_izq.value;
  }else {
    display.innerHTML += par_izq.value;
  }
  //PRUEBAS
  console.log("resultado: " + display.innerHTML);
}

par_dcho.onclick = () => {
  if (display.innerHTML == 0){
    display.innerHTML += par_dcho.value;
  }else {
    display.innerHTML += par_dcho.value;
  }
  //PRUEBAS
  console.log("resultado: " + display.innerHTML);
}

//-- Evaluar la expresion
igual.onclick = () => {
  display.innerHTML = eval(display.innerHTML);
  console.log("resultado: " + display.innerHTML);
}

//-- Poner a cero la expresion
clear.onclick = () => {
  display.innerHTML = "0";
}
