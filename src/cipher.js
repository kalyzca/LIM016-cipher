const cipher = {
  encode: function cifrando(offset,string) {
    //! Declarando variables
    let datoCifrado = "", offsetEntero = Number(offset);
    let codigoAsciiDatos, stringDatoCodAs;
    
    //! Realizando pruebas del offset y el string 
    if ( (offset==null) || (offset===0) || (isNaN(offset)) ){
      throw new TypeError();
    }
    
    for (let index = 0; index < string.length; index++){
      
      codigoAsciiDatos = string.charCodeAt(index);
      
      switch (codigoAsciiDatos) {
        case 32:
          stringDatoCodAs=String.fromCharCode(32);
          break;
        default:
          stringDatoCodAs=String.fromCharCode(codigoAsciiDatos);
          break;
      } 
      //* cuando el offset > 0, para offset positivo
      if (offsetEntero>0){
        //* pra letras mayusculas
        if (codigoAsciiDatos>=65 && codigoAsciiDatos<=90){
          stringDatoCodAs=String.fromCharCode(((codigoAsciiDatos-65+offsetEntero)%26)+65);
        }
        //* para letras minúsculas
        if (codigoAsciiDatos>=97 && codigoAsciiDatos<=122){
          stringDatoCodAs=String.fromCharCode(((codigoAsciiDatos - 97 + offsetEntero) % 26) + 97);
        }
        //* para numeros 
        if (codigoAsciiDatos>=48 && codigoAsciiDatos<=57){
          stringDatoCodAs=String.fromCharCode(((codigoAsciiDatos - 48 + offsetEntero) % 10) + 48);
        }
        
        
      }
      if(offsetEntero<0){//* cuando el offset < 0, para offset negativo
        //* para letras mayúsculas
        if (codigoAsciiDatos>=65 && codigoAsciiDatos<=90){
          stringDatoCodAs=String.fromCharCode(((codigoAsciiDatos - 90 + offsetEntero) % 26) + 90);
        }
        //* para letras minúsculas
        if (codigoAsciiDatos>=97 && codigoAsciiDatos<=122){
          stringDatoCodAs=String.fromCharCode(((codigoAsciiDatos - 122 + offsetEntero) % 26) + 122);
        }
        if (codigoAsciiDatos>=48 && codigoAsciiDatos<=57){
          stringDatoCodAs=String.fromCharCode(((codigoAsciiDatos - 57 + offsetEntero) % 10) + 57);
        }
      }
      
      datoCifrado += stringDatoCodAs;
      
    }
    
    return datoCifrado;
  
  },

  decode: (offsetdes,stringdes)=>{

    let desplazamientoOffset = Number(offsetdes);
    let datoDescifrado="";
    let stringDatoCodDes, codigoAsciiDatosDes;
    
    //* realizando condicionales para las pruebas
    if ( (offsetdes==null) || (offsetdes===0) || (isNaN(offsetdes)) ){
      throw new TypeError();
    }
    for (let x = 0; x < stringdes.length; x++) {
      //* transforma cada caracter a su codigo ASCII, Por ejm. A --> 65
      codigoAsciiDatosDes = stringdes.charCodeAt(x);
    
      //* para caracteres especiales como cuando es espacio y otros devuelve el mismo caracter
      switch (codigoAsciiDatosDes) {
        case 32:
          stringDatoCodDes=String.fromCharCode(32);
          break;
        default:
          stringDatoCodDes=String.fromCharCode(codigoAsciiDatosDes);
          break;
      }
    
      //*? descifrando cuando el offset es mayor a cero
      // if (desplazamientoOffset>0) {
        
        //* letras mayusculas
        if (codigoAsciiDatosDes>=65 && codigoAsciiDatosDes<=90){
          stringDatoCodDes=String.fromCharCode(((codigoAsciiDatosDes-90-desplazamientoOffset)%26)+90);
        }
        
        //* letras minúsculas
        if (codigoAsciiDatosDes>=97 && codigoAsciiDatosDes<=122){
          stringDatoCodDes=String.fromCharCode(((codigoAsciiDatosDes-122-desplazamientoOffset)%26)+122);
        }
        
        //* números
        if (codigoAsciiDatosDes>=48 && codigoAsciiDatosDes<=57){
          stringDatoCodDes=String.fromCharCode(((codigoAsciiDatosDes-57-desplazamientoOffset)%10)+57);
        }
      
      // } 
      
      datoDescifrado += stringDatoCodDes; 
    }
    return datoDescifrado;
  }

}
export default cipher;