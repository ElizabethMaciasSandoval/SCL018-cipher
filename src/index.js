import cipher from './cipher.js';
//declaramos la funcion funcionCifrar
const funcionCifrar = () =>{
  let desplazamiento = document.getElementById("desplazamiento").value;
  let mensaje = document.getElementById("mensaje").value; 
  document.getElementById("mensaje2").value = cipher.encode(desplazamiento,mensaje); 
}
//declaramos la variable btCifrar
const btCifrar = document.getElementById("btCifrar"); 
btCifrar.addEventListener("click", funcionCifrar);
//declaramos la funcion funcionDescifrar
const funcionDescifrar = () =>{
  let desplazamiento = document.getElementById("desplazamiento").value; 
  let mensaje = document.getElementById("mensaje").value; 
  document.getElementById("mensaje2").value = cipher.decode(desplazamiento,mensaje); 
}
//declaramos la variable btDecifrar
const btDescifrar = document.getElementById("btDescifrar"); 
btDescifrar.addEventListener("click", funcionDescifrar);
//declaramos la funcion funcionLimpiar
const funcionLimpiar = () =>{
  document.getElementById("mensaje").value = "";
  document.getElementById("mensaje2").value ="";
  document.getElementById("desplazamiento").value = 0;
}
//declaramos la variable btLimpiar
const btLimpiar = document.getElementById("btLimpiar");
btLimpiar.addEventListener("click", funcionLimpiar);



