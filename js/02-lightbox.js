import { galleryItems } from "./gallery-items.js";
// Change code below this line

document.addEventListener("DOMContentLoaded", function () {
    const galleryContainer = document.querySelector("ul.gallery");

    const images = galleryItems.map((item, index) => {
        return `<li>
            <a class="gallery__item" href="${item.original}" data-index="${index}">
                <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
            </a>
        </li>`;
    });

    galleryContainer.innerHTML = images.join("");

    const lightbox = new SimpleLightbox(".gallery a", {
        captionsData: "alt",
        captionPosition: "bottom",
        captionDelay: 250,
    });

    lightbox.on("close.simplelightbox", function () {
        document.removeEventListener("keydown", handleKeyPress);
    });

    galleryContainer.addEventListener("click", function (event) {
        event.preventDefault();
        if (event.target.tagName === "IMG") {
            const index = event.target.parentElement.dataset.index;
            lightbox.openAt(index);
        }
    });

    const handleKeyPress = (event) => {
        if (event.key === "ArrowLeft") {
            lightbox.prev();
        } else if (event.key === "ArrowRight") {
            lightbox.next();
        } else if (event.key === "Escape") {
            lightbox.close();
        }
    };
});
