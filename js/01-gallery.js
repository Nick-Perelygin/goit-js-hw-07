import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

galleryItems.map(element => {
    let galleryElement = `<a class="gallery__link" href="${element.original}" onclick="return false;"><img class="gallery__image" src="${element.preview}" data-source="${element.original}" alt="${element.description}"/>`;
    gallery.insertAdjacentHTML('afterbegin', galleryElement)
});

const instance = basicLightbox.create(
    `<img width="1280" height="auto" src="">`,
    {
		onShow: (instance) => console.log('onShow', instance),
		onClose: () => console.log('onClose', keydown())
	}
);

gallery.addEventListener('click', (e) => {
    if (e.target.className !== 'gallery__image')
        return;
    instance.element().querySelector('img').src = e.target.dataset.source;
    instance.show();
});

function keydown() {
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            instance.close();
        }
    })
}