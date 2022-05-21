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

function verificacionNota(nota): boolean {
  let numValido: boolean;
  if (nota == null || nota == "" || nota > 10 || nota < 0) numValido = false;
  else if (nota < 11 && nota >= 0) numValido = true;
  return numValido;
}

function verificacionNombre(nombre: string): boolean {
  let finCiclo: boolean = false;
  if (nombre == "" || nombre == null) finCiclo = true;
  return finCiclo;
}

botonaso.addEventListener("click", () => {
  let finCiclo: boolean = false;
  let notaAux: number = 0;
  let nombreAux: string;
  let notaFinal: number = 0;
  let notaValida: boolean=false;

  while (finCiclo !== true) {
    nombreAux = prompt("ingrese el nombre del estudiante");
    finCiclo = verificacionNombre(nombreAux);

    if (finCiclo == false) {
      alert(
        "El nombre " +
          nombreAux +
          " es valido, por favor continue con la carga de datos:"
      );
          for (let tipoNota: number = 1; tipoNota < 4; tipoNota++) {
              notaAux = prompt("Ingrese la nota numero " + tipoNota);
              notaValida = verificacionNota(notaAux);
                  if (notaValida == true) notaAux=claseNota(notaAux, tipoNota);
                  else{
                    alert("nota ingresada invalida, pase al siguiente estudiante");
                    break;
                  }
              notaFinal=notaAux+notaFinal;        
          }
    }
    if (notaValida == true) alert("la nota final del estudiante es " + notaFinal);
    notaFinal = 0;
    notaValida=false;
  } else alert("El nombre no es valido, fin de la carga de datos");
});