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
  { // -- Limitamos el movimiento de la pala para que no salga por la pared de arriba
    if (this.y >= 3) {
      this.y += this.v;
    }else {
      this.y = 0;
    }
    // -- Limitamos el movimiento de la pala para que no salga por la pared de abajo
    if (this.y <= 360) {
      this.y += this.v;
    }else {
      this.y = 360;
    }
  }

  //-- Dibujar la raqueta
  draw()
  {
    //------- Dibujar las raquetas
    this.ctx.beginPath();
    this.ctx.fillStyle='yellow';

    //-- Raqueta izquierda
    this.ctx.rect(this.x, this.y, this.width, this.height);

    //-- Pintar!
    this.ctx.fill();
  }

}
