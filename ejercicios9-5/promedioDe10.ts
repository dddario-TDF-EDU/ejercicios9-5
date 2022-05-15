let botonaso = document.getElementById("comenzar");

let i: number = 0;
let sumaNotas: number = 0;

botonaso.addEventListener("click", () => {
  while (i != 5) {
    let auxNotas: number = Number(prompt("Ingrese notas:"));
    sumaNotas = auxNotas + sumaNotas;
    i++;
  }
  console.log(sumaNotas);
  console.log("preview " + sumaNotas);
  let promedio: number = sumaNotas / i;
  alert("el promedio de notas es: " + promedio);
});

//for ( notas =0 ; notas<=3; notas++){

//let notasTotal:number=0;
//let notaAux:number=Number(prompt("Ingrese notas:";"nota"));
//let notasTotal=notasTotal+notaAux;
//console.log(notaAux)

//}
