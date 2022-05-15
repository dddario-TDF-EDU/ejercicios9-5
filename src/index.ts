let botonaso = document.getElementById("redireccionar");

botonaso.addEventListener("click", () => {
  let direccion: number = Number(seleccion.value);

  switch (direccion) {
    case 1:
      location.href = "../ejercicios9-5/divisiblesPor2y3.html";
      break;
    case 2:
      location.href = "../ejercicios9-5/promedioDe10.html";
      break;
    case 3:
      location.href = "../ejercicios9-5/notasFinales.html";
      break;

    default:
      location.href = "../ejercicios9-5/divisiblesPor2y3.html";
  }
});
