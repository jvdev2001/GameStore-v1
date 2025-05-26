const image =[
    [
            "/images/products/product-1.png",
            "/images/products/product-2.png",
            "/images/products/product-3.png"
    ],

    [
             "/images/products/product-4.png",
            "/images/products/product-5.png",
            "/images/products/product-6.png"
    ],

    [
            "/images/products/product-7.png",
            "/images/products/product-8.png",
            "/images/products/product-9.png"
    ]
];

let currentGroup = 0;

const conteudoHtml = document.querySelector(".cols.cols-3");

function updateImages(){
    conteudoHtml.innerHTML ="";

    image[currentGroup].forEach(src=>{
        const img = document.createElement("img");
        img.src = src;
        conteudoHtml.appendChild(img);
    });

    currentGroup = (currentGroup + 1) % image.length;
}
            
updateImages();
setInterval(updateImages,3000);

