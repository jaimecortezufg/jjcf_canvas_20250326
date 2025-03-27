var canvas_tres = document.getElementById("lienzo-tres");
var canvas_cuatro = document.getElementById("lienzo-cuatro");
var canvas_cinco = document.getElementById("lienzo-cinco");

if(canvas_tres.getContext){
    console.log("Sí se soporta la propiedad getContext");

    //OBTENIENDO EL CONTEXTO DEL OBJETO <canvas>
    var ctx_3 = canvas_tres.getContext("2d");

    ctx_3.fillStyle = "rgb(200,0,0)"; //CREAR UN OBJETO CON UN COLOR DE FONDO
    ctx_3.fillRect(10,10,55,50); //DIBUJAR EL OBJETO EN LA POSICIÓN X=10, Y=10, CON ANCHO DE 55px Y ALTO DE 50px

    ctx_3.fillStyle = "rgba(0,0,200,0.5)"; //CREAR UN OBJETO CON UN COLOR DE FONDO
    ctx_3.fillRect(30,30,55,50); //DIBUJAR EL OBJETO EN LA POSICIÓN X=30, Y=30, CON ANCHO DE 55px Y ALTO DE 50px

    ctx_3.fillStyle = "rgba(0,200,0,0.5)"; //CREAR UN OBJETO CON UN COLOR DE FONDO
    ctx_3.fillRect(50,50,55,50); //DIBUJAR EL OBJETO EN LA POSICIÓN X=50, Y=50, CON ANCHO DE 55px Y ALTO DE 50px
}else{
    console.log("No se soporta la propiedad getContext");
}


if(canvas_cuatro.getContext){
    console.log("Sí se soporta la propiedad getContext");


    var ctx_4 = canvas_cuatro.getContext("2d");

    ctx_4.beginPath(); //INICIA UN TRAZADO
    ctx_4.moveTo(5,5); //COLOCA EL PUNTERO DEL LÁPIZ EN LA POSICIÓN 5,5
    ctx_4.lineTo(125,125); //DIBUJA O TRAZA UNA LINEA HASTA LA POSICIÓN 125,125
    ctx_4.strokeStyle = "#FFFFFF"; //SE ASIGNA UN COLOR AL TRAZO
    ctx_4.stroke(); // SE IMPRIME EN EL LIENZO
}else{
    console.log("No se soporta la propiedad getContext");
}

if(canvas_cinco.getContext){
    console.log("Si se soporta la propiedad getContext");

    var ctx_5 = canvas_cinco.getContext("2d");

    ctx_5.beginPath();
    ctx_5.setLineDash([5,15]); //ESTABLECER UNA LINEA PUNTEADA CON 15 PIXELES DIBUJADOS Y 5 PIXELES SIN DIBUJAR
    ctx_5.moveTo(0,40); //COLOCAR EL PUNTERO DEL LAPIZ EN LA POSICION X=0, Y=40
    ctx_5.lineTo(150,40); //DIBUJAR O MOVER EL LAPIZ HASTA LA POSICION X=150, Y=40
    ctx_5.strokeStyle = "#FFFFFF";
    ctx_5.stroke();

    ctx_5.beginPath();
    ctx_5.setLineDash([]); //ESTABLECER UNA LINEA CONTÍNUA
    ctx_5.moveTo(0,120); //COLOCAR EL PUNTERO DEL LAPIZ EN LA POSICION X=0, Y=40
    ctx_5.lineTo(150,120); //DIBUJAR O MOVER EL LAPIZ HASTA LA POSICION X=150, Y=40
    ctx_5.strokeStyle = "#FFFFFF";
    ctx_5.stroke();
}else{
    console.log("No se soporta la propiedad getContext");
}