# FILTRADO DE IMAGENES
# Alejandro Esteban Lopez

====ARCHIVOS====
Archivo Principal html => filtro.html
Archivo Principal js => filtro.js
Estilo css => filtro.css
Imagen utilizad => image.jpg

====FUNCIONAMIENTO====
Vamos a la carpeta P5 donde tenemos la practica, abrimos un terminal y ejecutar:

python -m http.server

Al ejecutar este comando se lanza el servidor. Para ver en el navegador nuestra práctica hay que acceder a esta URL: http://0.0.0.0:8000/

A continuacion pinchar en el boton COLORES para interactuar con los deslizadores
de las componentes RGB y ver los cambios que se producen en nuestra imagen filtrada,
o pinchar sobre el boton de GRISES para ver nuestra imagen filtrada en grises.

====FUNCIONALIDADES EXTRA====

1)Añadido Filtro ROTACION:
  Este filtro nos ira rotando la imagen respecto al punto (0,0).
  Para ver mejor el efecto, pinchar varias veces seguidas en este filtro para ver
  como va rotando poco a poco la imagen.

2)Añadido Boton RESETEAR:
  Boton que nos sirve para realizar un reseteo del canvas tras la aplicacion de cualquiera
  o cualquieras modificaciones que se hayan realizado con los filtros que hayamos aplicado.
  Nos devuelve la imagen filtrada al estado inicial.

  Visualización: https://alejandroeslo.github.io/2019-2020-CSAAI-Practicas/P5/filtro.html
