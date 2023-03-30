let longitud = parseFloat(prompt("ingrese longitud"));
let medida = prompt("ingrse unidad de medida (m) o (k)");
switch (medida) {
    case "m":
        let resultado = longitud/1000
        console.log("es ",resultado,"kilometros");
        break;
        case "k":
            resultado = longitud*1000
            console.log("es: ",resultado,"metros");
            break;
    default:
        console.log("La unidad de medida no es valida");
        break;
}
