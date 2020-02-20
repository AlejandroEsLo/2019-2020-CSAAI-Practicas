console.log("Ejecutando JS...");

const test = document.getElementById('test');
const boton1 = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');
const n1 = 1;
const n2 = 2;

test.onclick = () =>{
  console.log("Clickk!!!");
  //Si no tiene color al pinchar lo ponemos al amarillo y si pinchamos otra vez lo quitamos
  if (test.style.backgroundColor== ""){
    test.style.backgroundColor = "yellow";
  }else {
    test.style.backgroundColor = "";
  }
}

boton1.onclick =() =>{
  console.log("BOTON1 PULSADO");
  test.innerHTML += n1;
}

boton2.onclick =() =>{
  console.log("BOTON2 PULSADO");
  test.innerHTML += n2;

}
