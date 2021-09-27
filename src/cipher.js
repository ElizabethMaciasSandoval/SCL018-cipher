const cipher = {
  //metodo encode
  encode: (offset,message) => { 
    let mensajeCifrado = "";
    // indicamos que se produsca un error si el usuario no ingresa un offset tipo number o de valor "0"
    if (offset === null || offset === 0){
      throw new TypeError;
    }
    //declaramos el ciclo for para que itere caracter por caracter
    for (let i = 0; i < message.length; i++) {
      //obtenemos el la posición que ocupa el caracter en el codigo ascii
      let codigoAscii = message.charCodeAt(i);
      //mediante if else indicamos que cifre letras mayusculas, minusculas y que los caracteres que no cumplen esta condición se devuelva ese mismo caracter
      if (codigoAscii >= 65 && codigoAscii <= 90){
        let nuevoCodigoAsciiMayusculas = ((codigoAscii - 65 + parseInt(offset)) % 26) + 65;
        mensajeCifrado += String.fromCharCode(nuevoCodigoAsciiMayusculas);
      }else if (codigoAscii >= 97 && codigoAscii <= 122){
        let nuevoCodigoAsciiMinusculas = ((codigoAscii - 97 + parseInt(offset)) % 26) + 97;
        mensajeCifrado += String.fromCharCode(nuevoCodigoAsciiMinusculas);
      }else {
        mensajeCifrado += String.fromCharCode(codigoAscii)
      }
    }
    return mensajeCifrado;
  },  
  //metodo encode  
  decode: (offset,message) => { 
    let mensajeDescifrado = "";
    // indicamos que se produsca un error si el usuario no ingresa un offset tipo number o de valor "0"
    if (offset === null || offset === 0){
      throw new TypeError;
    }
    //declaramos el ciclo for para que itere caracter por caracter
    for (let i = 0; i < message.length; i++) {
      //obtenemos el la posición que ocupa el caracter en el codigo ascii
      let codigoAscii = message.charCodeAt(i);
      //mediante if else indicamos que descifre letras mayusculas, minusculas y que los caracteres que no cumplen esta condición se devuelva ese mismo caracter
      if (codigoAscii >= 65 && codigoAscii <= 90){
        let nuevoCodigoAsciiMayusculas = ((codigoAscii - 90 - parseInt(offset)) % 26) + 90;
        mensajeDescifrado += String.fromCharCode(nuevoCodigoAsciiMayusculas);
      }else if (codigoAscii >= 97 && codigoAscii <= 122){
        let nuevoCodigoAsciiMinusculas = ((codigoAscii - 122 - parseInt(offset)) % 26) + 122;
        mensajeDescifrado += String.fromCharCode(nuevoCodigoAsciiMinusculas);
      }else{
        mensajeDescifrado += String.fromCharCode(codigoAscii)
      }
    }
    return mensajeDescifrado;
  }
};
export default cipher;