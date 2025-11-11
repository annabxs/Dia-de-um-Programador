//ARRAY DE OBJETOS COM AS IMAGENS E INFORMAÇÕES DO BANNER
const bannerItems =[
{
    imagem: "assets/MagikaBanner.png",
    titulo: "Fantasias especiais",
    descricao: "Fantasias da Marvel, DC e variados em promoção!"
},
{
    imagem: "assets/MagikaBanner2.png",
    titulo: "Fantasias Infantis",
    descricao: "Fantasias diversas para a diversão do seu filho!"
},

{
    imagem: "assets/MagikaBanner3.png",
    titulo: "🤕",
    descricao: "Magika - tornando sua fantasia realidade!"
}

];

//DECLARANDO AS VARIAVEIS E ELEMENTOS COM DOM(DOCUMENT OBJECT MODEL)
let i= 0;// inicio da contagem das imagens
const tempo = 5000; // tempo em milissegundos
const elementoBanner = document.querySelector(".banner");
const elementoTitulo = document.querySelector(".texto-banner");
const elementoDescricao = document.querySelector(".descricao-banner");


// FUNÇÃO PARA O SLIDESHOW

function slideShow(){
    // ALTERA A IMAEM DE FUNDO DO BANNER
    // ``- template strings ou string literais forma de concatenar
    elementoBanner.style.backgroundImage = `url(${bannerItems[i].imagem})`;
    // ALTERA O TITULO DO BANNER
    elementoTitulo.textContent =bannerItems[i].titulo;
     // ALTERA O DESCRIÇÃO DO BANNER
    elementoDescricao.textContent = bannerItems[i].descricao;

    // INCREMENTA O INDECE (i) e reinicia quando chegar no final do array

    // se o i for maior que a quantidade de imagems volta para o inicio
    i++;
    if( i >= bannerItems.length){
        i =0;
    }
    // chama a função noamente após o tempo definido
    setTimeout(slideShow, tempo);

}
// inicia o slideShow da função
slideShow()