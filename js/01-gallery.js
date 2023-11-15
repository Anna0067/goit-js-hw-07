import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector("ul.gallery");
let currentLightbox = null;

galleryContainer.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.tagName === "IMG") {
        const originalSrc = event.target.dataset.source;
        const lightbox = basicLightbox.create(
            `<img src="${originalSrc}" alt="${event.target.alt}">`
        );
        lightbox.show();
        currentLightbox = lightbox;

        document.addEventListener("keydown", handleKeyPress);
    }
});
const handleKeyPress = (event) => {
    if (event.key === "Escape" && currentLightbox) {
        currentLightbox.close();
        currentLightbox = null;
        document.removeEventListener("keydown", handleKeyPress);
    }
};

const images = galleryItems.map((item) => {
    return `<div class = "gallery__item">
    <a class = "gallery__link" href = "${item.original}">
    <img
        class = "gallery__image"
        src = "${item.preview}"
        data-source = "${item.original}"
        alt = :${item.description}" />
    </a>
    </div>`;
});
galleryContainer.insertAdjacentHTML("beforeend", images.join(""));

console.log(galleryItems);
