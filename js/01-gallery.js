import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);

const LIST_UL = document.querySelector('.gallery');

const IMG = galleryItems
  .map(({ preview, original, description }) => {
    return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`;
  })
  .join('');
LIST_UL.insertAdjacentHTML('beforeend', IMG);

LIST_UL.addEventListener('click', library);

function library(e) {
  e.preventDefault();
  let imageUrl = e.target.dataset.source;
  const instance = basicLightbox.create(`
  <img src="${imageUrl}" width="800" height="600">
  `);

  instance.show();

  document.addEventListener('keydown', e => {
    if (e.code === 'Escape') {
      instance.close();
    }
  });
}
