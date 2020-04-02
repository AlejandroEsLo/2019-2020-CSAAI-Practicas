console.log("Ejecutando JS...");

//-- Obtener el objeto canvas
const canvas = document.getElementById("canvas");

//-- Sus dimensiones las hemos fijado en el fichero
//-- HTML. Las imprimimos en la consola
console.log(`canvas: Anchura: ${canvas.width}, Altura: ${canvas.height}`);

//-- Obtener el contexto para pintar en el canvas
const ctx = canvas.getContext("2d");

//-- Obtener Sonidos
const sonido_raqueta = new Audio("pong-raqueta.mp3");
const sonido_rebote = new Audio("pong-rebote.mp3");
const sonido_tanto = new Audio("pong-tanto.mp3");
const sonido_pared = new Audio("fight.mp3");
const sonido_saque = new Audio("boom.mp3");

//-- Variables marcadores
let marcadorJ1 = 0;
let marcadorJ2 = 0;
let ganador = "nadie";

//-- Niveles de dificultad de jugador ordenador
let level_dificulty = 0;
//-- FACIL
const easy = document.getElementById("easy")
  easy.onclick = () => {
    level_dificulty = 0.75;
  }
//-- MEDIO
const medium = document.getElementById("medium");
  medium.onclick = () => {
    level_dificulty = 0.85;
  }
//-- DIFICIL
const hard = document.getElementById("hard");
  hard.onclick = () => {
    level_dificulty = 0.95;
  }
//-- Imposible
const impossible = document.getElementById("impossible");
  impossible.onclick = () => {
    level_dificulty = 1;
  }

//-- Estados del juego
const ESTADO = {
  INIT: 0,
  SAQUE: 1,
  JUGANDO: 2,
  FIN: 3,
}

//-- Variable de estado
//-- Arrancamos desde el estado inicial
let estado = ESTADO.INIT;


//-- Pintar todos los objetos en el canvas
function draw() {

  //----- Dibujar la Bola
  //-- Solo en el estado de jugando
  if (estado == ESTADO.JUGANDO) {
    bola.draw();
  }

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
  ctx.fillText(marcadorJ2, 340, 80);
  ctx.fillText(marcadorJ1, 200, 80);

  //-- Dibujar el texto de sacar
  if (estado == ESTADO.SAQUE) {
    ctx.font = "40px Arial";
    ctx.fillStyle = "yellow";
    ctx.fillText("Saca!", 30, 350);
  }

  //-- Dibujar el texto de comenzar
  if (estado == ESTADO.INIT) {
    ctx.font = "40px Arial";
    ctx.fillStyle = "green";
    ctx.fillText("Pulsa Start!", 30, 350);
  }

  //--Si gana alguien fin del juego
  if (estado == ESTADO.FIN) {
    ctx.font = "40px Arial";
    ctx.fillStyle = "red";
    ctx.fillText(ganador + " WINNER!!", 30, 350);
  }
}
//---- Bucle principal de la animación
function animacion()
{

  // <<<<< Actualizar las posiciones de los objetos móviles >>>>>//
  if (estado != ESTADO.INIT) {
    //-- Actualizar las raquetas con la velocidad actual
    raqI.update();
    //-- Hacemos que la raqueta izquierda la controle el ordenador
    raqI.y = bola.y * level_dificulty;
    raqD.update();
  }

  if (estado == ESTADO.INIT) {
    //-- Variables marcadores
    marcadorJ1 = 0;
    marcadorJ2 = 0;
    raqI.init();
    raqD.init();
  }

// <<<<< Comprobar colisiones canvas >>>>>//

  //-- Comprobar si la bola ha alcanzado el límite derecho
  //-- Si es así,  apuntamos tanto y volvemos al saque
  if (bola.x >= canvas.width) {
    estado = ESTADO.SAQUE;
    bola.init();
    console.log("Tanto J1!!!!");
    marcadorJ1++;

    //-- Si el ordenador llega a 5, gana la partida
    if (marcadorJ1 == 5.0) {
      ganador = "computer";
      estado = ESTADO.FIN;
    }

    //-- Reproducir sonido
    sonido_tanto.currentTime = 0;
    sonido_tanto.play();
    return;
  }

  //-- Comprobar si la bola ha alcanzado el límite izquierdo
  //-- Si es así, apuntamos tanto y volvemos al saque
  if (bola.x <= 0) {
    estado = ESTADO.SAQUE;
    bola.init();
    console.log("Tanto J2!!!!");
    marcadorJ2++;

    //-- Si el J2 llega a 5, gana la partida
    if (marcadorJ2 == 5.0) {
      ganador = "jugador";
      estado = ESTADO.FIN;
    }

    //-- Reproducir sonido
    sonido_tanto.currentTime = 0;
    sonido_tanto.play();
    return;
  }

  //-- Comprobar si la bola ha alcanzado el límite superior o inferior
  //-- Si es así, se cambia de signo la velocidad, para
  // que "rebote" y vaya en el sentido opuesto
  //--Superior
  if (bola.y >= canvas.height) {
    //-- Hay colisión. Cambiar el signo de la bola
    bola.vy = bola.vy * -1;
    //-- Reproducir sonido
    sonido_pared.currentTime = 0;
    sonido_pared.play();

  }
  //--Inferior
  if (bola.y <= 0) {
    //-- Hay colisión. Cambiar el signo de la bola
    bola.vy = bola.vy * -1;
    //-- Reproducir sonido
    sonido_pared.currentTime = 0;
    sonido_pared.play();

  }


// <<<<< Comprobar colisiones raqueta >>>>>//

  //-- Comprobar si hay colisión con la raqueta izquierda
  if (bola.x >= raqI.x && bola.x <=(raqI.x + raqI.width) &&
      bola.y >= raqI.y && bola.y <=(raqI.y + raqI.height)) {

      //Controlar velocidad bola respecto la raqueta
      if(raqI.v == 0){//Raqueta parada
        bola.vx = bola.vx * -1;
      }else { //Raqueta en movimiento
          bola.vx = bola.vx * -1;
          bola.vy = raqI.v
      }
      //-- Reproducir sonido
      sonido_raqueta.currentTime = 0;
      sonido_raqueta.play();
  }

  //-- Comprobar si hay colisión con la raqueta derecha
  if (bola.x >= raqD.x && bola.x <=(raqD.x + raqD.width) &&
      bola.y >= raqD.y && bola.y <=(raqD.y + raqD.height)) {
        //Controlar velocidad bola respecto la raqueta
        if(raqD.v == 0){//Raqueta parada
          bola.vx = bola.vx * -1;
        }else { //Raqueta en movimiento
            bola.vx = bola.vx * -1;
            bola.vy = raqD.v
        }
        //-- Reproducir sonido
        sonido_raqueta.currentTime = 0;
        sonido_raqueta.play();
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
    case "a"://Hacia abajo izq
      raqI.v = raqI.v_ini;
      break;
    case "q"://Hacia arriba izq
      raqI.v = raqI.v_ini * -1;
      break;
    //Raqueta derecha
    case "ArrowDown"://Hacia abajo dcha
      raqD.v = raqD.v_ini;
      break;
    case "ArrowUp"://Hacia arriba dcha
      raqD.v = raqD.v_ini * -1;
      break;

    case "s":
    //-- El saque solo funciona en el estado de SAQUE
    if (estado == ESTADO.SAQUE) {
      //-- Reproducir sonido
      sonido_raqueta.currentTime = 0;
      sonido_saque.play();

      //-- Llevar bola a su posicion incicial
      bola.init();

      //-- Darle velocidad (Angulos aleatorios en el saque)
      bola.vx = Math.random() * (5 - 1) + 1;
      bola.vy = Math.random() * (5 - 1) + 1;
      // Si quisieramos saque hacia arriba  * - (10 - 1) + 1;

      //-- Cambiar al estado de jugando!
      estado = ESTADO.JUGANDO;

      return false;
    }

    default:
  }
}

//-- Retrollamada de la liberacion de teclas
window.onkeyup = (e) => {
  if (e.key == "q" || e.key == "a"){
    //-- Quitar velocidad de la raqueta
    raqI.v = 0;
  }
  if (e.key == "ArrowDown" || e.key == "ArrowUp"){
    //-- Quitar velocidad de la raqueta
    raqD.v = 0;
  }
}

//-- Botón de arranque
const start = document.getElementById("start");

start.onclick = () => {
  estado = ESTADO.SAQUE;
  console.log("SAQUE!");
  canvas.focus();
  //Ver el nivel de dificultad que tenemos
  console.log(level_dificulty);

}

//-- Boton de stop
const stop = document.getElementById("stop");

stop.onclick = () => {
  //-- Volver al estado inicial
  estado = ESTADO.INIT;
  bola.init();
  start.disabled = false;
}


console.log(estado);
