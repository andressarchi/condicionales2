
let contraseña = parseInt(prompt("ingrese una contraseña"));
if  (contraseña.length >= 8  &&  contraseña.length <= 15 && contraseña.includes ("")){
    console.log("la contraseña es valida");
}
else {
    console.log("la contraseña no es validad");
}
