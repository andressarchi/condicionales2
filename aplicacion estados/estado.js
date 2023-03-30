let nombre = prompt("ingrese su nombre");
let cedula = prompt("ingrese su cedula");
let datos =  prompt("ingrese (1) si desea cambiar sus datos o (2) si desea visualizar los datos ");
switch (datos) {
    case "1":
        nombre=prompt("ingrese un nuevo nombre");
        cedula=prompt("ingrese una nueva cedula");
        console.log("su nombre  nuevo ses",nombre,"y cedula nueva es ",cedula);
        break;
    case "2":
       console.log("su nombre es ",nombre,"y cedula es ",cedula); 
       break;
    default:
        console.log("ingrese una una opcion existente");
        break;
    
}
