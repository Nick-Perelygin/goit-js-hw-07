import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

galleryItems.map(element => {
    gallery.innerHTML += `<a class="gallery__link" href="${element.original}" onclick="return false;"><img class="gallery__image" src="${element.preview}" alt="${element.description}"/>`
})

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom'
});