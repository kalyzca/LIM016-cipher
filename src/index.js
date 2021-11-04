import cipher from "./cipher.js";

//*TODO - OBTENIENDO LOS ELEMENTOS, ETIQUETAS O SECCIONES
//* obteniendo el header
let viewHeader = document.getElementsByClassName("header")[0];
//* boton  para denunciar registrando datos */
let btnConDatos = document.getElementById("condatos");


//* boton encrypt */
let btnencrypt = document.getElementById("btn-encrypt");

//* boton descifrar */
let btndesencrypt = document.getElementById("btn-descifrar");

//* obteniendo el mensaje del offset
let offsetMessage = document.getElementsByClassName("mensaje-offset")[0];


//*todo EVENTO PARA VOLVER AL INICIO
document.getElementById("btn-inicio").addEventListener("click",()=>{
  viewHeader.style.display="flex";
  document.querySelector(".principal").style.display="none";
})

//* todo EVENTO PARA  LIMPIAR INPUT
document.getElementById("btn-limpiar").addEventListener("click",limpiar);
function limpiar(){
  let datosInput= document.querySelectorAll(".data");
  for (let i = 0; i < datosInput.length; i++) {
    datosInput[i].value="";
  }
}
//*TODO - EVENTO PARA DENUNCIAR REGISTRANDO TUS DATOS */
btnConDatos.addEventListener("click", ()=>{
  viewHeader.style.display="none";
  document.querySelector(".principal").style.display="grid";
  
});

// *todo EVENTO PARA EL ACORDEON
document.getElementsByClassName("exp")[0].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });


 //todo EVENTO PARA ABRIR EL MODAL
btnencrypt.addEventListener("click", ()=>{
  document.getElementsByClassName("modal-offset")[0].style.display="flex";
});

//*todo EVENTO PARA CANCELAR EL OFFSET
document.querySelector("#cancelar").addEventListener("click",()=>{
  document.getElementsByClassName("modal-offset")[0].style.display="none";
})
//*todo EVENTO PARA CERRAR EL OFFSET
document.getElementsByClassName("close")[0].addEventListener("click",()=>{
  document.getElementsByClassName("close")[0].style.display="none";
})

//*todo EVENTO PARA EL BOTON LIMPIAR EL OFFSET
document.getElementById("limpiaroffset").addEventListener("click",()=>{
  document.getElementById("offset").value="";
  offsetMessage.innerHTML="";
})

//*todo EVENTO PARA GUARDAR EL OFFSET
document.querySelector("#guardaroffset").addEventListener("click",()=>{
  let desplazamiento = document.getElementById("offset").value;
  let offsetNumber = Number(desplazamiento);
  
  
  if(offsetNumber!==0){
    
    //* obteniendo el offset
    //* convirtiendo el offset a number    
  //* si offset es diferente de cero entonces el borde de la caja del input es verde
    document.getElementById("offset").style.border="solid 1px #00808080";
    offsetMessage.innerHTML="";

    //obteniendo valores de los input
    let nombres=document.getElementById("name").value;
    let apellidoPaterno= document.getElementById("lastnamepat").value;
    let apellidoMaterno= document.getElementById("lastnamemat").value;
    let dni=document.getElementById("numdoc").value;
    let telefono=document.getElementById("phone").value;
    let correo=document.getElementById("email").value;

    //* cifrando los datos de los input
    document.getElementById("name").value=cipher.encode(offsetNumber,nombres)
    document.getElementById("lastnamepat").value=cipher.encode(offsetNumber,apellidoPaterno);
    document.getElementById("lastnamemat").value=cipher.encode(offsetNumber,apellidoMaterno);
    document.getElementById("numdoc").value=cipher.encode(offsetNumber,dni);
    document.getElementById("phone").value=cipher.encode(offsetNumber,telefono);
    document.getElementById("email").value=cipher.encode(offsetNumber,correo);
  }

  else{
      offsetMessage.innerHTML="Ingrese un número diferente de cero."
      offsetMessage.style.color="#ff0000";
      document.getElementById("offset").style.border="solid 1px #ff0000";
  }
})



//*? evento cuando doy click en boton desencrypt

btndesencrypt.addEventListener("click", ()=> {
  
  document.getElementById("btn-descifrar").addEventListener("click",()=>{
    let des = document.getElementById("numoffset").value;
    des=(Number(des));
    // console.log(des)
    
    if (des>0) {
    //obteniendo valores de los input
    let nombresDes=document.getElementById("name").value;
    let apellidoPaternoDes= document.getElementById("lastnamepat").value;
    let apellidoMaternoDes= document.getElementById("lastnamemat").value;
    let dniDes=document.getElementById("numdoc").value;
    // let telefono=document.getElementById("phone").value;
    // let correo=document.getElementById("email").value;
    document.getElementById("name").value=cipher.decode(des,nombresDes);
    document.getElementById("lastnamepat").value= cipher.decode(des,apellidoPaternoDes);
    document.getElementById("lastnamemat").value= cipher.decode(des,apellidoMaternoDes);
    document.getElementById("numdoc").value=cipher.decode(des,dniDes);
  
  }
  
  });

})
    
    
    // eslint-disable-next-line no-undef
    // console.log(cipher);
    // console.log(cipher.decode("hola"));