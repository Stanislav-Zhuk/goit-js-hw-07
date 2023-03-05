import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// Gallery element markup
/*
<a class="gallery__item" href="large-image.jpg">
  <img class="gallery__image" src="small-image.jpg" alt="Image description" />
</a>
*/

const galleryEl = document.querySelector('.gallery');

const createGalleryMarkup = object => object.map(
		({ original, preview, description }) =>
			`<a class="gallery__item" href=${original}>
        <img class="gallery__image" src=${preview} alt='${description}' />
      </a>`,
);

galleryEl.insertAdjacentHTML("afterbegin", createGalleryMarkup(galleryItems).join(""));

const lightbox = new SimpleLightbox('.gallery a');

lightbox.options.captionsData = "alt";
lightbox.options.captionDelay = 250;
