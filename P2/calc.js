console.log("Ejecutando JS...");

const resultado = document.getElementById('resultado');
var resultado_final = 0;
var n1 = "";

const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const boton_suma = document.getElementById('boton_suma');
const boton_igual = document.getElementById('boton_igual');

b1.onclick =() =>{
  console.log("BOTON1 PULSADO");
  if (resultado.innerHTML == 0){
      resultado.innerHTML = 1;
  }else {
    resultado.innerHTML += 1;
  }
  resultado_final = resultado.innerHTML;
  //PRUEBAS
  console.log("resultado final: " + resultado_final);
  console.log("resultado: " + resultado.innerHTML);
}

b2.onclick =() =>{
  console.log("BOTON2 PULSADO");
  if (resultado.innerHTML == 0){
      resultado.innerHTML = 2;
  }else {
    resultado.innerHTML += 2;
  }
  resultado_final = resultado.innerHTML;
  //PRUEBAS
  console.log("resultado final: " + resultado_final);
  console.log("resultado: " + resultado.innerHTML);
}

boton_suma.onclick =() =>{
  console.log("SUMA PULSADO");
  n1 += resultado_final;
  resultado.innerHTML += "+";
  resultado_final = 0;

  //PRUEBAS
  console.log("resultado final: " + resultado_final);
  console.log("resultado: " + resultado.innerHTML);

  console.log("Numero1: " + n1);
}

boton_igual.onclick =() =>{
  console.log("IGUAL PULSADO");
  resultado.innerHTML = resultado_final + n1;
  //PRUEBAS
  console.log("resultado final: " + resultado_final);
  console.log("resultado: " + resultado.innerHTML);

}
