import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

galleryItems.map(element => {
    gallery.innerHTML += `<a class="gallery__link" href="${element.original}" onclick="return false;"><img class="gallery__image" src="${element.preview}" data-source="${element.original}" alt="${element.description}"/>`
})

const instance = basicLightbox.create(
  `<img width="1280" height="auto" src="">`
);

gallery.addEventListener('click', (e) => {
    if (e.target.className !== 'gallery__image')
        return;
    instance.element().querySelector('img').src = e.target.dataset.source;
    instance.show();
})

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        instance.close();
    }
});