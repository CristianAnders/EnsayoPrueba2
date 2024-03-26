
function CondAlumno(Nota) {
    //Nota=parseInt(Nota)

    //Nota es menor a 4 - LIBRE
    //Nota es menor a 7 y no es LIBRE - REGULAR 
    //Nota mayor que 6  - PROMOCIONADO.
    if (Nota<4) {
        console.log("LIBRE")
    } 
    else if (Nota>=4 && Nota<=6) {
        console.log("REGULAR")
    } 
    else if(Nota>6) {
        console.log("PROMOCIONADO")
    }

    if (Nota<1) {
        console.log("Error!! El Número Ingresado es Menor que 1")
    } else if (Nota>10) {
        console.log("Error!! El Número Ingresado es Mayor que 10")
    }
}

CondAlumno(0.12)