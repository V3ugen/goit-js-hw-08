// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';

// Change code below this line
console.log(galleryItems);



const createItemsMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
      `;
  })
  .join('');

const alleryContainerEl = document.querySelector('.gallery');

alleryContainerEl.insertAdjacentHTML('beforeend', createItemsMarkup);

let lightbox = new SimpleLightbox('.gallery a', {
  scrollZoom: false,
  captionDelay: 250,
  captionsData: 'alt',
  doubleTapZoom: 1.5,
  navText: ['←', '→'],
  spinner: true,
  
});
alleryContainerEl.addEventListener('click', event => {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
});
