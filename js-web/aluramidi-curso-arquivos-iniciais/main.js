function tocaSom (idElementoAudio) {

    const elemento = document.querySelector(idElementoAudio);

    if (elemento /*!= null*/ && elemento.localName === 'audio') { //o JavaScript entende que se colocado apenas a variavel no if significa que a variavel tem que ser diferente de null

        elemento.play();

    } else {
        console.log('Elemento não encontrado ou seletor invalido!');
    }
    
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaDeTeclas.length; i++) {

    const tecla = listaDeTeclas[i];

    const instrumento = tecla.classList[1]; //a função 'classList' busca a classe marcada da constante selecionada

    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        
        if(evento.code === "Enter" || evento.code === "Space") { //para especificar qual tecla deve ativar a class ativa (code é a codificação que o browser da um nome a tecla) / a || representa a condição de alternativa (OU)
        tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}

/*let contador = 0;

function incrementarContador() {
  contador = contador + 1;
  console.log("Contador: " + contador);
}

const tecla1 = document.querySelector(".tecla_pom")
tecla1.onclick = incrementarContador; */
