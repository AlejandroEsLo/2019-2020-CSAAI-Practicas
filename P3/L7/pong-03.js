console.log("Ejecutando JS...");

//-- Obtener el objeto canvas
const canvas = document.getElementById("canvas");

//-- Sus dimensiones las hemos fijado en el fichero
//-- HTML. Las imprimimos en la consola
console.log(`canvas: Anchura: ${canvas.width}, Altura: ${canvas.height}`);

//-- Obtener el contexto para pintar en el canvas
const ctx = canvas.getContext("2d");

//----- Dibujar la Bola
ctx.beginPath();
ctx.fillStyle='white';

//-- x,y, anchura, altura
ctx.rect(100, 200, 10, 10);
ctx.fill();

//------- Dibujar las raquetas
//-- Raqueta izquierda
ctx.beginPath();
ctx.fillStyle='red';
ctx.rect(50, 100, 10, 40);
//-- Pintar!
ctx.fill();

//-- Raqueta derecha
ctx.beginPath();
ctx.fillStyle='blue';
ctx.rect(550, 300, 10, 40);
//-- Pintar!
ctx.fill();
