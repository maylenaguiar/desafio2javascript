let participacion = prompt ("¿Querés participar del sorteo?");

if (participacion == "si"){
alert ("Buenísimo, continuamos")

let edad = prompt ("¿Cuántos años tenés?");

let edadParseada = parseInt(edad);
 

if (edadParseada >= 18) {
    alert ("Podés participar")
}

else {
    alert ("Para participar tenés que ser mayor de 18 años")
}  
}
else {
    alert ("Gracias por ingresar. Nos vemos pronto")
    }