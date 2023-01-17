// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
    galleryList: document.querySelector('.gallery'),
}

const markup = galleryItems.map(item => 
    `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}" 
        rel="noreferrer nofollow" target="_blank">
    <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}" 
    />
    </a>
    </div>`).join('');

refs.galleryList.insertAdjacentHTML('beforeend', markup);
refs.galleryList.addEventListener('click', onClick);

function onClick(evt) {
    evt.preventDefault();
    console.log(evt.target);
   
new SimpleLightbox('.gallery a', {
    captionDelay: 250,
  });
}