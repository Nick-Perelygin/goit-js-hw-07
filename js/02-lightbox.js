import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

galleryItems.map(element => {
    let galleryElement = `<a class="gallery__link" href="${element.original}" onclick="return false;"><img class="gallery__image" src="${element.preview}" data-source="${element.original}" alt="${element.description}"/>`;
    gallery.insertAdjacentHTML('afterbegin', galleryElement)
})

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
    captionDelay: 250,
  captionPosition: 'bottom'
});