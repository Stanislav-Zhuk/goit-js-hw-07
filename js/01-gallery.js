import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// Gallery element markup
/* <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div> */

const galleryEl = document.querySelector('.gallery');

const createGalleryMarkup = object => object.map(
		({ original, preview, description }) =>
			`<div class="gallery__item">
      		<a class="gallery__link" href=${original}>
        		<img
            		class="gallery__image"
            		src=${preview}
            		data-source=${original}
            		alt='${description}'
        		/>
      		</a>
    	</div>`,
);

galleryEl.insertAdjacentHTML("afterbegin", createGalleryMarkup(galleryItems).join(""));

const onClick = event => {
  event.preventDefault();
  if (event.target.className !== 'gallery__image') {
    return;
  }
  basicLightbox.create(`<img src="${event.target.dataset.source}" width="1280">`).show(onClose);
}

const onClose = click => {
	window.addEventListener("keydown", event => {
		if (event.code === "Escape") {
			return click.close();
		}
	});
}

galleryEl.addEventListener('click', onClick);