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

//cambiar valor del while a 10 para que se cumpla la condicion pedida
