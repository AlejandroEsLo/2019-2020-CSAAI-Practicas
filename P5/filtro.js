console.log("Ejecutando JS....")

//-- Obtener elementos del DOM
const canvas = document.getElementById('canvas');
const img = document.getElementById('imagesrc');
const ctx = canvas.getContext('2d');

//-- Acceso alos deslizadores
const R = document.getElementById('R');
const G = document.getElementById('G');
const B = document.getElementById('B');

//-- Valor de los deslizadores
const range_value_R = document.getElementById('range_value_R');
const range_value_G = document.getElementById('range_value_G');
const range_value_B = document.getElementById('range_value_B');

//-- Función de retrollamada de imagen cargada
//-- La imagen no se carga instantaneamente, sino que
//-- lleva un tiempo. Sólo podemos acceder a ella una vez
//-- que esté totalmente cargada
img.onload = function () {

  //-- Se establece como tamaño del canvas el mismo
  //-- que el de la imagen original
  canvas.width = img.width;
  canvas.height = img.height;

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);

  console.log("Imagen lista...");
};


//-- Funcion comun para todos los deslizadores
function RGB(){
  //-- Mostrar el nuevo valor del deslizador
  range_value_R.innerHTML = R.value;
  range_value_G.innerHTML = G.value;
  range_value_B.innerHTML = B.value;

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);

  //-- Obtener la imagen del canvas en pixeles
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  //-- Obtener el array con todos los píxeles
  let data = imgData.data

  //-- Obtener los umbrales de los deslizadores
  umbral_R = R.value
  umbral_G = G.value
  umbral_B = B.value

  //-- Filtrar la imagen según el nuevo umbral
  for (let i = 0; i < data.length; i+=4) {
    if (data[i] > umbral_R)
      data[i] = umbral_R;

    if (data[i+1] > umbral_G)
      data[i+1] = umbral_G;

    if (data[i+2] > umbral_B)
      data[i+2] = umbral_B;
  }

  //-- Poner la imagen modificada en el canvas
  ctx.putImageData(imgData, 0, 0);
};

//-- Funcion de retrollamada de los deslizadores
R.oninput = () => {
  RGB()
}

G.oninput = () => {
  RGB()
}
B.oninput = () => {
  RGB()
}

console.log("Fin...");
