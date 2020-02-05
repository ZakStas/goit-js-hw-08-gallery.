'use strict'

import gallery from './gallery-items.js'


const openModal = document.querySelector('.js-lightbox');
const lightboxOverlay = document.querySelector('.lightbox__overlay');
const lightboxContent = document.querySelector('.lightbox__content');
const closeModal = document.querySelector('button[data-action="close-lightbox"]');
const jsGallery = document.querySelector('.js-gallery')
const lightboxImage = document.querySelector('.lightbox__image');
const btn = document.querySelector('.lightbox__button')
const addList = gallery
.map ((elem, index) => `<li class = gallery__item> 
<a class = gallery__link href=${elem.original}>
<img class = gallery__image src=${elem.preview} data-source=${elem.original} data-alt=${elem.description} data-pos=${index} />
 </a>
 </li>`).join(" ");
 jsGallery.insertAdjacentHTML('beforeend', addList)

const openModalWindow =(event) => {

  const galleryLink = Array.from(document.querySelectorAll('.gallery__link'));
  galleryLink.forEach(item => {
    if (
      event.target.getAttribute('data-source') === item.getAttribute('href')
    ) {
      item.removeAttribute('href');
    }  
  });    

  openModal.classList.add('is-open');
  lightboxImage.setAttribute('src', event.target.getAttribute('data-source'));
  lightboxImage.setAttribute('alt', event.target.getAttribute('alt'));
  window.addEventListener('keydown', handleKeyPress );

  
};

function closeLightBox(event) {
  if(event.target.className === "lightbox__image"){
    console.log(event.target.className)
    return
  }
  closeGallery();
}
lightboxContent.addEventListener('click', closeLightBox);

jsGallery.addEventListener('click', openModalWindow );

closeModal.addEventListener('click', closeGallery )

function closeGallery() {
  openModal.classList.remove('is-open')
  window.removeEventListener('keydown', handleKeyPress)
}

const lightbox = document.querySelector('.js-lightbox')
lightbox.addEventListener('click', handleLightboxClick)

function handleLightboxClick(event) {
  if(event.target === event.currentTarget) {
    return;
  }
  
}

function handleKeyPress(event) {
  if(event.code !== "Escape") {
    return;
  }
  closeGallery();
}



