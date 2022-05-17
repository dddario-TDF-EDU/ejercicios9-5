let botonaso = document.getElementById("comenzar");

function claseNota(nota: number, tipoNota: number): number {
  switch (tipoNota) {
    case 1:
      nota = nota * 0.1;
      return nota;
    case 2:
      nota = nota * 0.5;
      return nota;
    case 3:
      nota = nota * 0.4;
      return nota;
    default:
      console.log("no debio haberse llegado a este punto, corregir");
      return 0;
  }
}

function verificacionNota(nota: number, tipoNota: number): number {
  let notaAuxLocal = Number(prompt("Ingrese la nota:"));

  if (notaAuxLocal < 11 && notaAuxLocal >= 0) {
    notaAuxLocal = claseNota(notaAuxLocal, tipoNota);
  } else {
    alert("Nota ingresada invalida, pase al siguiente estudiante");
    notaAuxLocal = -1;
  }
  return notaAuxLocal;
}

function verificacionNombre(finCiclo: boolean): boolean {
  finCiclo = false;
  let nombreAux: string = prompt("ingrese el nombre del estudiante");
  if (nombreAux != "") {
    alert("Nombre valido, proceda a cargar los datos");
  } else {
    alert("Fin del ciclo, comienza calculo del promedio.");
    finCiclo = true;
  }
  return finCiclo;
}

botonaso.addEventListener("click", () => {
  let finCiclo: boolean = false;
  let notaAux: number = 0;
  let contadorVueltas: number = 0;
  let notaMedioCiclo: number = 0;
  let notaTotal: number = 0;

  while (finCiclo !== true) {
    // if (finCiclo == true) {
    //   alert("comprobado, este while no funciona , es " + finCiclo);
    // }
    finCiclo = verificacionNombre(finCiclo);
    //alert("comprobado, este while no funciona , es " + finCiclo);
    if (finCiclo == false) {
      for (let cantNotas: number = 1; cantNotas < 4; cantNotas++) {
        notaAux = verificacionNota(notaAux, cantNotas);
        if (notaAux != -1) {
          notaMedioCiclo = notaMedioCiclo + notaAux;
        } else {
          notaMedioCiclo = 0;
          break;
        }
      }
    }
    notaTotal = notaTotal + notaMedioCiclo;
    if (notaMedioCiclo != 0) {
      contadorVueltas++;
    }
    notaMedioCiclo = 0;
  }
  console.log("estado " + contadorVueltas);
  console.log("estado " + notaTotal);
  alert("el promedio final de notas es: " + notaTotal / contadorVueltas);
});

//document.getElementById("app")?.innerHTML = "cola loca";
// ingresa el nombre;
// verificar nombre distinto de nulo

// ingresar nota

// 3 llamados, a doble parametro, indicando el porcentaje
// while funcion verificarNota=true;

//  Funcion verificar Nota Valida

//     Si,continuar
//     No,pasar a otro nombre

//la primer nota se multiplica por 0.1, la segunda por 0,5 y la tercera por 0,4

//for ( notas =0 ; notas<=3; notas++){

//let notasTotal:number=0;
//let notaAux:number=Number(prompt("Ingrese notas:";"nota"));
//let notasTotal=notasTotal+notaAux;
//console.log(notaAux)

//}
