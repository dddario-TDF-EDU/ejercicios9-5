let botonaso = document.getElementById("comenzar");

function claseNota(nota: number, tipoNota: number) {
  switch (tipoNota) {
    case 1:
      nota = nota * 0.1;
      break;
    case 2:
      nota = nota * 0.5;
      break;
    case 3:
      nota = nota * 0.4;
      break;
    default:
      console.log("no debio haberse llegado a este punto, corregir");
  }
}

function verificacionNota(nota: number, tipoNota: number, notaValida: boolean) {
  let notaAuxLocal = Number(prompt("Ingrese la nota:"));

  if (notaAuxLocal < 11 && notaAuxLocal >= 0) {
    claseNota(notaAuxLocal, tipoNota);
    nota = notaAuxLocal;
  } else {
    alert("Nota ingresada invalida, pase al siguiente estudiante");
    notaValida = false;
  }
}

function verificacionNombre(finalizarCiclo: boolean) {
  let nombreAux: string = prompt("ingrese el nombre del estudiante");
  if (nombreAux != "") {
    alert("Nombre valido, proceda a cargar los datos");
  } else {
    alert("Fin del ciclo, comienza calculo del promedio.");
    finalizarCiclo = true;
  }
}

botonaso.addEventListener("click", () => {
  let finCiclo: boolean = false;
  let notaValida: boolean = true;
  let notaAux: number = 0;
  let contadorVueltas: number = 0;
  let notaMedioCiclo: number = 0;
  let notaTotal: number = 0;

  while (finCiclo != true) {
    verificacionNombre(finCiclo);
    if (finCiclo != true) {
      for (let i: number = 1; i < 4; i++) {
        verificacionNota(notaAux, i, notaValida);
        if (notaValida == true) {
          notaMedioCiclo = notaMedioCiclo + notaAux;
        } else {
          notaMedioCiclo = 0;
          break;
        }
      }
      notaTotal = notaTotal + notaMedioCiclo;
      contadorVueltas++;
    }
  }

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
