// error_reporting(E_ERROR | E_PARSE);
// import './css/styles.css';
import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import fetchPixaApiService from './pixabay';


const refs = {
    searchForm: document.querySelector('.search-form'),
    gallery: document.querySelector('.gallery'),
    loadBtn: document.querySelector('.load-more'),
}
const ApiService = new fetchPixaApiService();
const lightbox = new SimpleLightbox('.photo-link', {
  overlayOpacity: 0.4,
  animationSpeed: 100,
});

refs.searchForm.addEventListener('submit', onSearchForm);
refs.loadBtn.addEventListener('click', onLoadMoreBtn);


function resetMarkup() {
  refs.gallery.innerHTML = '';
}

// function rewrightMarkup(markup) {
//   refs.gallery.insertAdjacentHTML('beforeend', imgTemplate(markup));
// }

function chekIfInpIsEmpty() {
  Notiflix.failure('Please, enter something in search field!');

  notShowLoadBtn();
  resetMarkup();
}


// Зробити плавне прокручування сторінки після запиту і відтворення кожної наступної групи зображень.
function smoothScroll(){
    const { height: cardHeight } = document
    .querySelector(".gallery")
    .firstElementChild.getBoundingClientRect();

    window.scrollBy({
    top: cardHeight * 2,
    behavior: "smooth",
    });
}