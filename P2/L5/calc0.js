
console.log("Ejecutando JS...");

display = document.getElementById("display")
suma = document.getElementById("suma")
igual = document.getElementById("igual")
clear = document.getElementById("clear")

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

//-- Insertar simbolo de sumar
suma.onclick = () => {
  display.innerHTML += suma.value;
}

//-- Evaluar la expresion
igual.onclick = () => {
  display.innerHTML = eval(display.innerHTML);
}

//-- Poner a cero la expresion
clear.onclick = () => {
  display.innerHTML = "0";
}
