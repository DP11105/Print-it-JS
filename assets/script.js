const slides = [
    {
        "image": "./assets/images/slideshow/slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>",
        
    },
    {
        "image": "./assets/images/slideshow/slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
        
    },
    {
        "image": "./assets/images/slideshow/slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>",
        
    },
    {
        "image": "./assets/images/slideshow/slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

let currentIndex = 0;
const slideImg = document.getElementById("slide-img");
const slideText = document.getElementById("slide-text");
const prevBtn = document.querySelector(".arrow-left");
const nextBtn = document.querySelector(".arrow-right");
const dots = document.querySelectorAll(".dot");

// 🔹 Fonction pour mettre à jour l'affichage
function updateSlide() {
    slideImg.src = slides[currentIndex].image;
    slideText.innerHTML = slides[currentIndex].tagLine;

    dots.forEach((dot, index) => {
        dot.classList.toggle("dot_selected", index === currentIndex);
    });
}





// 🔹 Gestion des boutons
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length ) % slides.length;
    updateSlide();
});

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide();
});

// 🔹 Initialisation du premier slide
updateSlide();