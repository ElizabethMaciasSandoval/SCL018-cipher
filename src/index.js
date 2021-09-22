import cipher from './cipher.js';
//declaramos la funcion funcionCifrar
const funcionCifrar = () =>{
  let desplazamiento = document.getElementById("desplazamiento").value; //con let desplazamiento obtendremos el dato que nos entrega el input de id desplazamiento (el cual es llamado usando getElementById)
  let mensaje = document.getElementById("mensaje").value; //con let mensaje obtendremos el dato que nos entrega el input de id mensaje(el cual es llamado usando getElementById)
  document.getElementById("mensaje2").value = cipher.encode(desplazamiento,mensaje); //usando getElementById llamo al input mensaje2 en el cual se imprimira el mensaje ya cifado indicando que este es igual al objeto cipher.encode
}
const btCifrar = document.getElementById("btCifrar"); //declaramos la variable btCifrar la cual mediante getElementById le indicamos el id btCifrar que corresponde al boton cifrar que ejecuta la funcionCifrar 
btCifrar.addEventListener("click", funcionCifrar); //a btCifrar le indicamos que cuando se produsca el evento click se ejecute la funcionCifrar
//declaramos la funcion funcionDescifrar
const funcionDescifrar = () =>{
  let desplazamiento = document.getElementById("desplazamiento").value; //con let desplazamiento obtendremos el dato que nos entrega el input de id desplazamiento (el cual es llamado usando getElementById)
  let mensaje = document.getElementById("mensaje").value; //con let mensaje obtendremos el dato que nos entrega el input de id mensaje(el cual es llamado usando getElementById)
  document.getElementById("mensaje2").value = cipher.decode(desplazamiento,mensaje); //usando getElementById llamo al input mensaje2 en el cual se imprimira el mensaje ya decifado indicando que este es igual al objeto cipher.decode
}
const btDescifrar = document.getElementById("btDescifrar"); //declaramos la variable btDecifrar la cual mediante getElementById le indicamos el id btDescifrar que corresponde al boton descifrar que ejecuta la funcionDescifrar 
btDescifrar.addEventListener("click", funcionDescifrar); //a btDescifrar le indicamos que cuando se produsca el evento click se ejecute la funcionDescifrar
//declaramos la funcion limpiar
const funcionLimpiar = () =>{
  document.getElementById("mensaje").value = "";
  document.getElementById("mensaje2").value ="";
  document.getElementById("desplazamiento").value = 0;
}
const btLimpiar = document.getElementById("btLimpiar"); //declaramos la variable btLimpiar 
btLimpiar.addEventListener("click", funcionLimpiar);



