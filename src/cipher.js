const cipher = {
  encode: (offset,message) => { 
    let mensajeCifrado = "";
    
    if (offset === null || offset === 0){
      throw new TypeError;
    }
    for (let i = 0; i < message.length; i++) {
      let codigoAscii = message.charCodeAt(i);
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
  decode: (offset,message) => { 
    let mensajeDescifrado = "";
    
    if (offset === null || offset === 0){
      throw new TypeError;
    }
    for (let i = 0; i < message.length; i++) {
      let codigoAscii = message.charCodeAt(i);
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