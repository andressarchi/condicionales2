let año = parseInt(prompt("ingrese una año"));
let añoBi= año % 4 == 0 || año % 400 == 0
let añoNoBi = !año % 100 == 0
 switch (true) {
  case añoBi:
    console.log("el año es bisiesto");
    break;

  case añoNoBi:
    console.log("el año no es bisiesto");
    break;

  default:
    console.log("el año ingresado no es bisiesto");
    break;
 }
  
  
  
  
