console.log("Ejecutando JS...");

//----- Obtener elemento de video1 y configurarlo
const video1 = document.getElementById("video1")
video1.width=200;  //-- Tamaño de la pantalla de video
video1.height=100;

//----- Obtener elemento de video2 y configurarlo
const video2 = document.getElementById("video2")
video2.width=200;  //-- Tamaño de la pantalla de video
video2.height=100;

//----- Obtener elemento de video3 y configurarlo
const video3 = document.getElementById("video3")
video3.width=200;  //-- Tamaño de la pantalla de video
video3.height=100;

//----- Obtener elemento de video3 y configurarlo
const imagen_prueba = document.getElementById("imagen_prueba")
imagen_prueba.width=200;  //-- Tamaño de la pantalla de video
imagen_prueba.height=100;


//----- Obtener elemento de video emision y configurarlo
const video_emision = document.getElementById("video_emision")
video_emision.width=600;  //-- Tamaño de la pantalla de video
video_emision.height=300;


//-- Imagen estática a mostrar cuando el video no
//-- ha arrancado
video1.poster="https://github.com/myTeachingURJC/2019-2020-CSAAI/raw/master/L10/test.png";
video2.poster="https://github.com/myTeachingURJC/2019-2020-CSAAI/raw/master/L10/test.png";
video3.poster="https://github.com/myTeachingURJC/2019-2020-CSAAI/raw/master/L10/test.png";
imagen_prueba.poster="https://github.com/myTeachingURJC/2019-2020-CSAAI/raw/master/L10/test.png";
video_emision.poster="https://github.com/myTeachingURJC/2019-2020-CSAAI/raw/master/L10/test.png";

//-- Obtener los botones
const play_v1 = document.getElementById("play_v1")
const play_v2 = document.getElementById("play_v2")
const play_v3 = document.getElementById("play_v3")
//const stop = document.getElementById("stop")
const inicio = document.getElementById("iniciar_videos")

inicio.onclick = () => {
  console.log("Iniciamos videos");
  video1.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4"
  video1.play();

  video2.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4"
  video2.play();

  video3.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4"
  video3.play();

  imagen_prueba.src = "/images/fondo.jpg"
  imagen_prueba.play();

};


//-- Función de retrollamada del botón de ver
play_v1.onclick = () => {
  console.log("Click V1");
  // VER COMO METER AQUI EL VIDEO QUE ESTA REPRODUCIENDOSE DIRECTAMENTE
  video_emision.src = "https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4"
  video_emision.play();
};

play_v2.onclick = () => {
  console.log("Click V2");
  video_emision.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4"
  video_emision.play();
};

play_v3.onclick = () => {
  console.log("Click V3");
  video_emision.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4"
  video_emision.play();
};



//-- Funcion de retrollamada del boton de parar
stop.onclick = () => {
  video1.pause();

  //-- Quitar la fuente de video, para que se muestre la
  //-- imagen definida en el atributo poster
  video1.src=null;
}
