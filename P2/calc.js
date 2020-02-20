console.log("Ejecutando JS...");

const boton1 = document.getElementById('boton1');
const resultado = document.getElementById('resultado');

boton1.onclick =() =>{
  console.log("BOTON1 PULSADO");
  resultado.innerHTML += "(";
}
