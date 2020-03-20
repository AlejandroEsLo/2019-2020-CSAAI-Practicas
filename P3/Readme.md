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
  El saque tendra un rango de entre 6 y 1 dentro de la clase bola:
      this.vx = Math.random() * (6 - 1) + 1;
      this.vy = Math.random() * (6 - 1) + 1;
