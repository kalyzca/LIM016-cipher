const cipher = {
  encode: function cifrando(offset,string) {
    //! Declarando variables
    let datoCifrado = "", offsetEntero = Number(offset);
    let codigoAsciiDatos, stringDatoCodAs;
    
    //! Realizando pruebas del offset y el string de acuerdo a las siguientes situaciones
    if ( (offset==null) || (offset===0) || (isNaN(offset)) ){
      throw new TypeError();
    }
    // if (string===null || string==="" || string === []){
    //   throw new TypeError();
    // }
    
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
      else {//* cuando el offset < 0, para offset negativo
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
    let datoDescifrado="";
    let stringDatoCodDes;
    let codigoAsciiDatosDes;
    let desplazamientoOffset = Number(offsetdes);
    
    if ( (offsetdes==null) || (offsetdes===0) || (isNaN(offsetdes)) ){
      throw new TypeError();
    }
    // if (stringdes===null || stringdes==="" || stringdes === []){
    //   throw new TypeError();
    // }


    for (let x = 0; x < stringdes.length; x++) {
      codigoAsciiDatosDes = stringdes.charCodeAt(x);
      // console.log(codigoAsciiDatosDes);
      
      switch (codigoAsciiDatosDes) {
        case 32:
          stringDatoCodDes=String.fromCharCode(32);
          break;
        default:
          stringDatoCodDes=String.fromCharCode(codigoAsciiDatosDes);
          break;
      }

      //* letras mayusculas
      if (codigoAsciiDatosDes>=65 && codigoAsciiDatosDes<=90){
         // * a  b  c  d  e  f  g  h i  j  k  l  m  n  o  p  q  r  s  t  u  v  w  x  y   z
          //  65 66 67 68 69 70 71 72 73 74 75 76 77 78 70 80 81 82 83 84 85 86 87 88 89 90
          // 72 = h
          // (72 - 90 - 33 = 15
          // (72 - 90 - 33) %26 ) + 90=65



        stringDatoCodDes=String.fromCharCode(((codigoAsciiDatosDes-90-desplazamientoOffset)%26)+90);
        // console.log(stringDatoCodDes);
        // datoDescifrado += stringDatoCodDes;
      }
      //* letras minúsculas
      if (codigoAsciiDatosDes>=97 && codigoAsciiDatosDes<=122){
        stringDatoCodDes=String.fromCharCode(((codigoAsciiDatosDes-122-desplazamientoOffset)%26)+122);
      }
      //* números
      if (codigoAsciiDatosDes>=48 && codigoAsciiDatosDes<=57){
        stringDatoCodDes=String.fromCharCode(((codigoAsciiDatosDes-57-desplazamientoOffset)%10)+57);
      }
      datoDescifrado += stringDatoCodDes;
      // console.log(stringDatoCodDes);
      // console.log("D="+datoDescifrado);
    }
    return datoDescifrado;
  }
  
}
export default cipher;