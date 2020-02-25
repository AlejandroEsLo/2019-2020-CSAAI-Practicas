

const boton_suma = document.getElementById('boton_suma');
const boton_igual = document.getElementById('boton_igual');
const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
let n1 = "";//let => variable local



b1.onclick =() =>{
  console.log("BOTON1 PULSADO");
  if (display.innerHTML == 0){
      display.innerHTML = 1;
  }else {
    display.innerHTML += 1;
  }
  resultado_final = display.innerHTML;
  //PRUEBAS
  console.log("resultado final: " + resultado_final);
  console.log("resultado: " + display.innerHTML);
}

b2.onclick =() =>{
  console.log("BOTON2 PULSADO");
  if (display.innerHTML == 0){
      display.innerHTML = 2;
  }else {
    display.innerHTML += 2;
  }
  resultado_final = display.innerHTML;
  //PRUEBAS
  console.log("resultado final: " + resultado_final);
  console.log("resultado: " + display.innerHTML);
}

boton_suma.onclick =() =>{
  console.log("SUMA PULSADO");
  n1 += resultado_final;
  display.innerHTML += "+";
  resultado_final = 0;

  //PRUEBAS
  console.log("resultado final: " + resultado_final);
  console.log("resultado: " + display.innerHTML);

  console.log("Numero1: " + n1);
}

boton_igual.onclick =() =>{
  console.log("IGUAL PULSADO");
  display.innerHTML = resultado_final + n1;
  //PRUEBAS
  console.log("resultado final: " + resultado_final);
  console.log("resultado: " + display.innerHTML);

}
