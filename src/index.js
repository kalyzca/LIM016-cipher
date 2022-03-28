import cipher from "./cipher.js";

//*TODO - OBTENIENDO LOS ELEMENTOS, ETIQUETAS O SECCIONES
//* obteniendo el Bienvenida
let viewBienvenida = document.getElementsByClassName("bienvenida")[0];
//* boton  para denunciar registrando datos */
let btnConDatos = document.getElementById("condatos");

//* obteniendo el mensaje del offset
let offsetMessage = document.getElementsByClassName("mensaje-offset")[0];

//*todo EVENTO PARA EL BOTON SIGUIENTE
// document.getElementById("btn-denunciacd").addEventListener("click", ()=>{
//     document.getElementsByClassName("denuncia")[0].style.display="block";
//   document.getElementsByClassName("registro-denuncia")[0].style.display="none";
//   document.getElementsByClassName("datos")[0].style.display="none";
//   document.getElementsByClassName("casocd")[0].style.display="flex";
// })

//*todo EVENTO PARA EL BOTON ANTERIOR
// document.getElementById("btn-registrocd").addEventListener("click", ()=>{
//   document.getElementsByClassName("denuncia")[0].style.display="block";
//   document.getElementsByClassName("registro-denuncia")[0].style.display="none";
//   document.getElementsByClassName("datos")[0].style.display="block";
//   document.getElementsByClassName("casocd")[0].style.display="none";
// })

//*todo EVENTO PARA VOLVER AL INICIO
document.getElementById("btn-inicio").addEventListener("click",()=>{
  viewBienvenida.style.display="flex";
  document.querySelector(".principal").style.display="none";
})

//* todo EVENTO PARA  LIMPIAR INPUT
document.getElementById("btn-limpiar").addEventListener("click",limpiar);

function limpiar(){
  let datosInput= document.querySelectorAll(".dataOfset");
  let datosForm=document.querySelectorAll(".data");
  for (let i = 0; i < datosInput.length; i++) {
    datosInput[i].value="";
  }
  for (let index = 0; index < datosForm.length; index++) {
    datosForm[index].value="";
    
  }
}
//*TODO - EVENTO PARA DENUNCIAR REGISTRANDO TUS DATOS */
btnConDatos.addEventListener("click", ()=>{
  viewBienvenida.style.display="none";
  document.querySelector(".principal").style.display="flex";
});

// *todo EVENTO PARA EL ACORDEON
document.getElementsByClassName("titulo-instrucciones")[0].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });


//*todo EVENTO PARA CIFRAR
document.getElementById("btn-encrypt").addEventListener("click",()=>{
  //* obteniendo el offset
  let desplazamiento = document.getElementById("numoffset").value;
  //* convirtiendo el offset a number    
  let offsetNumber = Number(desplazamiento);
  
  if(offsetNumber!==0){
    //* si offset es diferente de cero entonces el borde de la caja del input es verde
    document.getElementById("numoffset").style.border="solid 1px green";
    offsetMessage.innerHTML="";

    //obteniendo valores de los input
    let nombres=document.getElementById("name").value;
    let apellidoPaterno= document.getElementById("lastnamepat").value;
    let apellidoMaterno= document.getElementById("lastnamemat").value;
    let dni=document.getElementById("numdoc").value;
    let telefono=document.getElementById("phone").value;
    let correo=document.getElementById("email").value;
    let direccion=document.getElementById("direccion").value;
    //* cifrando los datos de los input
    document.getElementById("name").value=cipher.encode(offsetNumber,nombres)
    document.getElementById("lastnamepat").value=cipher.encode(offsetNumber,apellidoPaterno);
    document.getElementById("lastnamemat").value=cipher.encode(offsetNumber,apellidoMaterno);
    document.getElementById("numdoc").value=cipher.encode(offsetNumber,dni);
    document.getElementById("phone").value=cipher.encode(offsetNumber,telefono);
    document.getElementById("email").value=cipher.encode(offsetNumber,correo);
    document.getElementById('direccion').value=cipher.encode(offsetNumber,direccion);
  }

  else{
      offsetMessage.innerHTML="Ingrese un número diferente de cero."
      offsetMessage.style.color="#ff0000";
      document.getElementById("numoffset").style.border="solid 1px red";
  }
})



//*? evento cuando doy click en boton desencrypt
//* boton descifrar */
document.getElementById("btn-descifrar").addEventListener("click", ()=> {
  let des = document.getElementById("numoffset").value;
  des=(Number(des));
      
  if (des>0) {
  //obteniendo valores de los input
    let nombresDes=document.getElementById("name").value;
    let apellidoPaternoDes= document.getElementById("lastnamepat").value;
    let apellidoMaternoDes= document.getElementById("lastnamemat").value;
    let dniDes=document.getElementById("numdoc").value;
    let telefonoDes=document.getElementById("phone").value;
    let correoDes=document.getElementById("email").value;
    let direccionDes=document.getElementById("direccion").value;
    document.getElementById("name").value=cipher.decode(des,nombresDes);
    document.getElementById("lastnamepat").value= cipher.decode(des,apellidoPaternoDes);
    document.getElementById("lastnamemat").value= cipher.decode(des,apellidoMaternoDes);
    document.getElementById("numdoc").value=cipher.decode(des,dniDes);
    document.getElementById("phone").value=cipher.decode(des,telefonoDes);
    document.getElementById("email").value=cipher.decode(des,correoDes);
    document.getElementById("direccion").value=cipher.decode(des,direccionDes);
  }
  
});



//*todo EVENTO PARA CREAR LA FILA
let btnagregar = document.querySelector(".agregar-denunciadocd");
let tabla = document.querySelector(".tabla-denunciado");

btnagregar.addEventListener("click", ()=>{
  console.log("hola chicos");
  
  let fila = document.createElement("tr");
  tabla.appendChild(fila);
  let contenidotd = document.createElement("td");
  fila.appendChild(contenidotd);
  fila.textContent="gola"
    
    
});

