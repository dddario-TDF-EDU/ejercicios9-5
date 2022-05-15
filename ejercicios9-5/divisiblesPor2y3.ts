let botonaso = document.getElementById("comenzar");

botonaso.addEventListener("click", () => {
  for (let contador = 1; contador < 101; contador = contador + 1) {
    if (contador % 2 === 0 && contador % 3 === 0) {
      console.log(contador);
    } else if (contador % 2 === 0) {
      console.log(contador);
    } else if (contador % 3 === 0) {
      console.log(contador);
    }
  }
});
