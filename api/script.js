const containerVideos = document.querySelector(".videos__container");


async function buscarEMostrarVideos(){
    try{
        const busca = await fetch("http://localhost:3000/videos");
        const videos = await busca.json();

            videos.forEach((video)=> {
                if(video.categoria == ""){
                    throw new Error("Vídeo não tem categoria");
                }
                // o hidden faz com que a tag nao apareça na pagina
                containerVideos.innerHTML += `
                <li class="videos__item">
                    <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
                    <div class="descricao-video">
                        <img class="img-canal" src="${video.imagem}" alt="Logo do Canal">
                        <h3 class="titulo-video">${video.titulo}</h3>
                        <p class="titulo-canal">${video.descricao}</p>
                        <p class="categoria" hidden>${video.categoria}</p> 
                    </div>
                </li>
                `;
            })
    } catch(error){
            containerVideos.innerHTML = `<p>Houve um erro ao carregar os videos: ${error}</p>`
    }
}


buscarEMostrarVideos();

const barraDePesquisa = document.querySelector(".pesquisar__input");

barraDePesquisa.addEventListener("input", filtrarPesquisa); //dessa forma, cada vez que alguem chamar o input, irá executar a função filtrarPesquisa

function filtrarPesquisa() {
    const videos = document.querySelectorAll(".videos__item");

    if(barraDePesquisa.value != "") {
        for(let video of videos){
            let titulo = video.querySelector(".titulo-video").textContent.toLowerCase();
            let valorFiltro = barraDePesquisa.value.toLowerCase();
            //condição para que caso o titulo do video nao seja igual ao valor do filtro, ele nao apareça, caso seja, ele apareça
            if(!titulo.includes(valorFiltro)){
                video.style.display = "none";
            } else {
                video.style.display = "block";
            }

        }
    } else {
        video.style.display = "block"; //aparece todos os videos
    }
}

// Outra forma de executar a função filtrarPesquisa 
/*function filtrarPesquisa() {
  const videos = document.querySelectorAll('.videos__item');
  const valorFiltro = barraDePesquisa.value.toLowerCase();

  videos.forEach((video) => {
    const titulo = video.querySelector('.titulo-video').textContent.toLowerCase();

    video.style.display = valorFiltro ? titulo.includes(valorFiltro) ? 'block' : 'none' : 'block';
  });
}
 */

const botaoCategoria = document.querySelectorAll(".superior__item"); //capturando todos os botoes de categoria da pagina

botaoCategoria.forEach ((botao) => {
    let nomeCategoria = botao.getAttribute("name"); //pegando a categoria name dada no index de acordo com o botao
    botao.addEventListener("click", () => filtrarPorCategoria(nomeCategoria)) //evento que ocorre a função quando acionamos o "click"
})

function filtrarPorCategoria(filtro) {
    const videos = document.querySelectorAll(".videos__item");
    for(video of videos) {
        let categoria = video.querySelector(".categoria").textContent.toLowerCase();
        let valorFiltro = filtro.toLowerCase();

        if(!categoria.includes(valorFiltro) && valorFiltro != 'tudo'){
            video.style.display = "none";
        } else{
            video.style.display = "block";
        }
    }
}