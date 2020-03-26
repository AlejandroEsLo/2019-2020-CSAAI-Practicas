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

--ESTADOS--

    INIT: Estado inicial. En este estado aparece en la pantlla el mensaje "Pulsa Start".
    Al apretar el botón de start, el juego comenzará. Mientras el juego esté en este estado inicial,
    las raquetas NO se pueden mover con las teclas. Ni tampoco se debe visualizar la bola.

    SAQUE: Estado de saque. El juego ha comenzado, pero se está esperando a que el jugador saque.
    Para ello deberá apretar la tecla S. Las raquetas sí se pueden mover con las teclas,
    pero no hay bola todavía. En cuanto se aprieta el botón S,
    se pasa al siguiente estado: JUGANDO.

    JUGANDO: Hay un tanto en curso. La bola está en movimiento. Las raquetas se pueden
    mover con las teclas, pero la tecla S no debe funcionar. Si se aprieta se ignora.
    Cuando finaliza el tanto se vuelve al estado de SAQUE.



====FUNCIONALIDADES EXTRA====

1)Controlar velocidad bola respecto la raqueta
   -Con la raqueta parada, la bola saldra en la direccion contraria sin variar su
   velocidad en y.

   -Con la raqueta en movimiento , la bola saldra en direccion contraria. Si la raqueta se mueve hacia arriba, le transmite velocidad hacia arriba, y si se mueve hacia abajo, le transmite velocidad hacia abajo

2)Velocidad y ángulo aleatorios de la bola en el saque:
  Al sacar, tanto el ángulo como la velocidad de la bola serán aleatorios
  (dentro de un rango), haciendo el saque más impredecible.
  Dentro de la clase bola en bola.js:

      //-- Velocidad inicial de la bola
      this.vx_ini = Math.random() * (3 - 1) + 1;
      this.vy_ini = Math.random() * (3 - 1) + 1;

  En el pong.js si pulsamos el espacio para sacar:
      //-- Darle velocidad
      bola.vx = Math.random() * (10 - 1) + 1;
      bola.vy = Math.random() * (10 - 1) + 1;
