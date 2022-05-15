let botonaso = document.getElementById("comenzar");

let i: number = 0;
let sumaNotas: number = 0;


 botonaso.addEventListener("click", () => {
  let auxNotas: number = Number(espacioNota.value);
  while (i != 5) {
    
 
    sumaNotas = auxNotas + sumaNotas;
    i++;
    
  }
console.log(sumaNotas);
    });
  
