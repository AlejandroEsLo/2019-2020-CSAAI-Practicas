//-- Objeto raqueta
class Raqueta
{
  constructor(ctx) {

    //-- Guardar el contexto
    this.ctx = ctx;

    //-- Constante: Tamaño de la raqueta
    this.width = 10;
    this.height = 40;

    //-- Constante: Posicion inicial
    this.x_ini = 50;
    this.y_ini = 100;

    //-- Constante: Velocidad
    this.v_ini = 3;

    //-- Velocidad (variable)
    this.v = 0;

    //-- Inicializar la raqueta a su posicion inicial
    this.init();
  }

  //-- Inicializar la raqueta a su posicion original
  init()
  {
    this.x = this.x_ini;
    this.y = this.y_ini;
  }

  //-- Actualizar la posición de la raqueta
  update()
  {
    this.y += this.v;
  }

  //-- Dibujar la raqueta
  draw()
  {
    //------- Dibujar las raquetas
    this.ctx.beginPath();
    this.ctx.fillStyle='white';

    //-- Raqueta izquierda
    this.ctx.rect(this.x, this.y, this.width, this.height);

    //-- Pintar!
    this.ctx.fill();
  }
  golpear()
  {//-- Comprobar si hay colisión con la raqueta derecha
    if (bola.x >= raqD.x && bola.x <=(raqD.x + raqD.width) &&
        bola.y >= raqD.y && bola.y <=(raqD.y + raqD.height)) {
          bola.vx = bola.vx * -1;
    }
  }
}
