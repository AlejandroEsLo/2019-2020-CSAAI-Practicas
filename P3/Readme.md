# PONG!!!
# Alejandro Esteban Lopez

====ARCHIVOS====
Archivo Principal html => pong.html
Archivo Principal js => pong.js
Estilo css => pong.css
Clase raqueta => raqueta.js
Clase bola => bola.js

====FUNCIONAMIENTO====
Pulsar ESPACIO para sacar.
Teclas W y S: Mover raqueta izquierda.
Teclas ArrowUp(Flecha arriba) y ArrowDown(Flecha abajo): Mover raqueta derecha.

====FUNCIONALIDADES EXTRA====

1)Controlar velocidad bola respecto la raqueta
   -Con la raqueta parada, la bola saldra en la direccion contraria sin variar su
   velocidad en y.

   -Con la raqueta en movimiento , la bola saldra en direccion contraria aumentando
   la velocidad de y en 1 unidad.

2)Velocidad y ángulo aleatorios de la bola en el saque:
  Al sacar, tanto el ángulo como la velocidad de la bola serán aleatorios
  (dentro de un rango), haciendo el saque más impredecible.
  Dentro de la clase bola en bola.js:

      //-- Velocidad inicial de la bola
      this.vx_ini = Math.random() * (6 - 1) + 1;
      this.vy_ini = Math.random() * (6 - 1) + 1;

  En el pong.js si pulsamos el espacio para sacar:
      //-- Darle velocidad
      bola.vx = Math.random() * (10 - 1) + 1;
      bola.vy = Math.random() * (10 - 1) + 1;
