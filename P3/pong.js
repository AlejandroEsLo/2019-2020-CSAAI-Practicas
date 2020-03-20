console.log("Ejecutando JS...");

//-- Obtener el objeto canvas
const canvas = document.getElementById("canvas");

//-- Sus dimensiones las hemos fijado en el fichero
//-- HTML. Las imprimimos en la consola
console.log(`canvas: Anchura: ${canvas.width}, Altura: ${canvas.height}`);

//-- Obtener el contexto para pintar en el canvas
const ctx = canvas.getContext("2d");

//-- Pintar todos los objetos en el canvas
function draw() {

  //----- Dibujar la Bola
  bola.draw();

  //-- Dibujar la raqueta izquierda
  raqI.draw();

  //-- Dibujar la raqueta derecha
  raqD.draw();

  //--------- Dibujar la red
  ctx.beginPath();

  //-- Estilo de la linea: discontinua
  //-- Trazos de 10 pixeles, y 10 de separacion
  ctx.setLineDash([10, 10]);
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 2;
  //-- Punto superior de la linea. Su coordenada x está en la mitad
  //-- del canvas
  ctx.moveTo(canvas.width/2, 0);

  //-- Dibujar hasta el punto inferior
  ctx.lineTo(canvas.width/2, canvas.height);
  ctx.stroke();

  //------ Dibujar el tanteo
  ctx.font = "100px Arial";
  ctx.fillStyle = "white";
  ctx.fillText("0", 200, 80);
  ctx.fillText("1", 340, 80);
}

//---- Bucle principal de la animación
function animacion()
{

// <<<<< Actualizar las posiciones de los objetos móviles >>>>>//

  //-- Actualizar las raquetas con la velocidad actual
  raqI.update();
  raqD.update();

// <<<<< Comprobar colisiones canvas >>>>>//

  //-- Comprobar si la bola ha alcanzado el límite derecho
  //-- Si es así, se cambia de signo la velocidad, para
  // que "rebote" y vaya en el sentido opuesto
  if (bola.x >= canvas.width) {
    //-- Hay colisión. Cambiar el signo de la bola
    bola.vx = bola.vx * -1;
  }

  //-- Comprobar si la bola ha alcanzado el límite izquierdo
  //-- Si es así, se cambia de signo la velocidad, para
  // que "rebote" y vaya en el sentido opuesto
  if (bola.x <= 0) {
    //-- Hay colisión. Cambiar el signo de la bola
    bola.vx = bola.vx * -1;
  }

  //-- Comprobar si la bola ha alcanzado el límite superior o inferior
  //-- Si es así, se cambia de signo la velocidad, para
  // que "rebote" y vaya en el sentido opuesto
  //--Superior
  if (bola.y >= canvas.height) {
    //-- Hay colisión. Cambiar el signo de la bola
    bola.vy = bola.vy * -1;
  }
  //--Inferior
  if (bola.y <= 0) {
    //-- Hay colisión. Cambiar el signo de la bola
    bola.vy = bola.vy * -1;
  }


// <<<<< Comprobar colisiones raqueta >>>>>//

  //-- Comprobar si hay colisión con la raqueta izquierda
  if (bola.x >= raqI.x && bola.x <=(raqI.x + raqI.width) &&
      bola.y >= raqI.y && bola.y <=(raqI.y + raqI.height)) {


//*
      //Controlar velocidad bola respecto la raqueta
      if(raqI.v == 0){//Raqueta parada
        bola.vx = bola.vx * -1;
      }else { //Raqueta en movimiento
          bola.vx = bola.vx * -1;
          bola.vy = bola.vy + 1;

      }
//*/
  }

  //-- Comprobar si hay colisión con la raqueta derecha
  if (bola.x >= raqD.x && bola.x <=(raqD.x + raqD.width) &&
      bola.y >= raqD.y && bola.y <=(raqD.y + raqD.height)) {
        //Controlar velocidad bola respecto la raqueta
        if(raqD.v == 0){//Raqueta parada
          bola.vx = bola.vx * -1;
        }else { //Raqueta en movimiento
            bola.vx = bola.vx * -1;
            bola.vy = bola.vy + 1;
        }
  }

// <<<<< Actualizar posicion bola >>>>>//

  //-- Actualizar coordenada x de la bola, en funcion de su velocidad
    bola.update()

// <<<<< Borrar la pantalla y Dibujar >>>>>//

  //-- Borrar la pantalla
  ctx.clearRect(0,0, canvas.width, canvas.height);

  //-- Dibujar el nuevo frame
  draw();
}

// <<<<< Objeto: Bola >>>>>//
//-- Inicializa la bola: Llevarla a su posicion inicial
const bola = new Bola(ctx);

//-- Crear las raquetas
// <<<<< Objeto: raqueta izquierda >>>>>//
const raqI = new Raqueta(ctx);
// <<<<< Objeto: raqueta derecha >>>>>//
const raqD = new Raqueta(ctx);

//-- Cambiar las coordenadas de la raqueta derecha
raqD.x_ini = 540;
raqD.y_ini = 300;
raqD.init();

//-- Arrancar la animación
setInterval(()=>{
  animacion();
},16);

//-- Retrollamada de las teclas
window.onkeydown = (e) => {

  switch (e.key) {
    //Raqueta izquierda
    case "s"://Hacia abajo izq
      raqI.v = raqI.v_ini;
      break;
    case "w"://Hacia arriba izq
      raqI.v = raqI.v_ini * -1;
      break;
    //Raqueta derecha
    case "ArrowDown"://Hacia abajo dcha
      raqD.v = raqD.v_ini;
      break;
    case "ArrowUp"://Hacia arriba dcha
      raqD.v = raqD.v_ini * -1;
      break;

    case " ":
      //-- Llevar bola a su posicion incicial
      bola.init();
      //-- Darle velocidad
      bola.vx = Math.random() * (10 - 1) + 1;
      bola.vy = Math.random() * (10 - 1) + 1;
      
    default:
  }
}

//-- Retrollamada de la liberacion de teclas
window.onkeyup = (e) => {
  if (e.key == "s" || e.key == "w"){
    //-- Quitar velocidad de la raqueta
    raqI.v = 0;
  }
  if (e.key == "ArrowDown" || e.key == "ArrowUp"){
    //-- Quitar velocidad de la raqueta
    raqD.v = 0;
  }
}
