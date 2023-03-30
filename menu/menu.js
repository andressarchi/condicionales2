
let opcion = parseInt(prompt("ingrese un numero de el 1 al 3 para elegir una opcion, si no desea ninguna opcion selecciona 4"))
switch (opcion) {
    case 1:
        console.log("ha selecionando la opcion 1 este tiene un menu de desayunos ");
        break;
    case 2:
        console.log("ha selecionando la opcion 2 este tiene un menu de almuerzos ");
        break;
    case 3:
        console.log("ha selecionando la opcion 3 este tiene un menu de cenas ");
        break;
    case 4:
        console.log("nos vemos pronto");
        break;
    default:
        console.log("elija un menu que se encuentre activo");
        break;
}