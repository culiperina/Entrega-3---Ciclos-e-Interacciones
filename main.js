


// Solicito Nombre y Apellido
var NombreUsuario = prompt ("Ingresá tu nombre")
var ApellidoUsuario= prompt ("Ingresá tu apellido") 

if ((NombreUsuario === "Florencia") && (ApellidoUsuario === "Taborda"))
{
    alert ("Basta de probar Florencia!")
}else{ alert ("Bienvenido" + " " + NombreUsuario + " " + ApellidoUsuario); 
}

//Solicitar Edad y validar que sea un número


while(true){
    var edad = prompt('Ingresá tu edad:');
    if(!isNaN(edad) && edad != null && edad != ""){
        alert('Gracias por compartirnos tu edad');
      break;
    }else{
        prompt('Lo que ingresaste no es número. Ingresá tu edad:');
      continue;
    }
}



//  Bucleo de conteo con FOR para indicar un número
    let contador = alert ("Estás por ingresar al sitio")
    for (let contador = 1; contador <= 10; contador ++) {
       if(contador==5) {
           continue;
       }
    alert ("Estás próximo a ingresar! Tu número en la fila es"+" "+contador);
   }



