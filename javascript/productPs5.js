const produto = [
   "/images/productsGabinetes/product-14-ps5.png",
   "/images/productsGabinetes/Ps5-PNG-isolated-HD.png"

];

let currentIndex = 0;

const imgElement = document.getElementById("imagem-produto");

function updateImage() {
    imgElement.src = produto[currentIndex];
    currentIndex = (currentIndex + 1) % produto.length;
}

updateImage(); // mostra a primeira imagem imediatamente
setInterval(updateImage, 3000); // troca a cada 3 segundos
