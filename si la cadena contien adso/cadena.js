let cadena = prompt("ingrese  una cadena de texto")
let cadenaA = cadena.includes("adso") && cadena.includes("desarrolladores")
let cadenaB = cadena.includes("desarrolladores") && !cadena.includes("adso")
let cadenaC = cadena.includes("adso") && !cadena.includes("desarrolladores")
switch (true) {
    case cadenaC:
        console.log("contiene las palabra adso pero no contiene la palabra desarrolladores");
        break;
    case cadenaB:
        console.log("contiene la palabra desarrolladores peor no la palabra adso");
        break;
    case cadenaA:
        console.log("contiene ambas palabras");
        break;
    default:
        console.log("no contiene niinguna de las palabras");
        break;
}
