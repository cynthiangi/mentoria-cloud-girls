let contador = 0;

function incrementarContador() {
  contador = contador + 1;
  console.log("Contador: " + contador);
}

const tecla = document.querySelector(".tecla_pom")
tecla.onclick = incrementarContador;
