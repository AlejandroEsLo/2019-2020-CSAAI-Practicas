console.log("Ejecutando JS...");

//-- Obtener el objeto canvas
const canvas = document.getElementById("canvas");

//-- Sus dimensiones las hemos fijado en el fichero
//-- HTML. Las imprimimos en la consola
console.log(`canvas: Anchura: ${canvas.width}, Altura: ${canvas.height}`);

//-- Obtener el contexto para pintar en el canvas
const ctx = canvas.getContext("2d");

//-- Objeto: Bola
const bola = {

  //-- Constante: Tamaño de la bola
  size : 5,

  //-- Contante: Posicion inicial de la bola
  x_ini : 100,
  y_ini : 200,

  //-- Posicion generica de la bola
  x : 0,
  y : 0,

  //-- Velocidad inicial de la bola
  vx_ini : 6,
  vy_ini : 3,

  //-- Velocidad genérica de la bola
  //-- Inicialmente a cero
  vx : 0,
  vy : 0,
}

//-- Objeto raqueta izquierda
const raqI = {
  //-- Constante: Tamaño de la raqueta
  width : 10,
  height: 40,

  //-- Constante: Posicion inicial
  x_ini : 50,
  y_ini : 100,

  //-- Constante: Velocidad
  v_ini : 3,

  //-- Velocidad (variable)
  v : 0,
}

//-- Objeto raqueta derecha
const raqD = {
  //-- Constante: Tamaño de la raqueta
  width : 10,
  height: 40,

  //-- Constante: Posicion inicial
  x_ini : 540,
  y_ini : 300,

  //-- Constante: Velocidad
  v_ini : 3,

  //-- Velocidad (variable)
  v : 0,
}


//-- Pintar todos los objetos en el canvas
function draw() {

  //----- Dibujar la Bola
  ctx.beginPath();
  ctx.fillStyle='white';

  //-- x,y, anchura, altura
  ctx.rect(bola.x, bola.y, bola.size, bola.size);
  ctx.fill();

  //------- Dibujar las raquetas
  ctx.beginPath();
  ctx.fillStyle='white';

  //-- Raqueta izquierda
  ctx.rect(raqI.x, raqI.y, raqI.width, raqI.height);

  //-- Raqueta derecha
  ctx.rect(raqD.x, raqD.y, raqD.width, raqD.height);

  //-- Pintar!
  ctx.fill();

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

  //-- Actualizar la raqueta con la velocidad actual
  raqI.y += raqI.v;
  raqD.y += raqD.v;


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
    bola.vx = bola.vx * -1;
  }

  //-- Comprobar si hay colisión con la raqueta derecha
  if (bola.x >= raqD.x && bola.x <=(raqD.x + raqD.width) &&
      bola.y >= raqD.y && bola.y <=(raqD.y + raqD.height)) {
    bola.vx = bola.vx * -1;
  }

// <<<<< Actualizar posicion bola >>>>>//

  //-- Actualizar coordenada x de la bola, en funcion de
  //-- su velocidad
  bola.x += bola.vx;

// <<<<< Borrar la pantalla y Dibujar >>>>>//

  //-- Borrar la pantalla
  ctx.clearRect(0,0, canvas.width, canvas.height);

  //-- Dibujar el nuevo frame
  draw();
}

//-- Inicializa la bola: A su posicion inicial
bola.y = bola.y_ini;

//-- Inicializar las raquetas a su posicion inicial
bola.x = bola.x_ini;
raqI.x = raqI.x_ini;
raqI.y = raqI.y_ini;

raqD.x = raqD.x_ini;
raqD.y = raqD.y_ini;


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

    case " "://saque
      bola.x = bola.x_ini;
      bola.vx = bola.vx_ini;
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
