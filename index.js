// Selecciona la imagen principal por su ID
const mainImage = document.getElementById('main-image');
const mainImageSrc = mainImage.style.backgroundImage; // Guarda el src de la imagen principal

// Selecciona todas las imágenes pequeñas
const thumbnails = document.querySelectorAll(".section-highlights-content-thumbnail");
const thumbnailsContainer = document.getElementById('section-highlights-content-thumbnails');
thumbnailsContainer.addEventListener('mouseleave', () => {
    mainImage.style.backgroundImage = mainImageSrc;
})

// Añade un event listener a cada imagen pequeña
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('mouseover', () => {
        mainImage.style.backgroundImage = thumbnail.style.backgroundImage; // Cambia la imagen principal a la del thumbnail
    });
});