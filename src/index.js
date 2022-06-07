// // error_reporting(E_ERROR | E_PARSE);
// import './css/styles.css';
// import Notiflix from 'notiflix';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';
// import fetchPixaApiService from './pixabay';
// import { renderCard } from './renderHTML';



// const refs = {
//     searchForm: document.querySelector('.search-form'),
//     gallery: document.querySelector('.gallery'),
//     loadMoreBtn: document.querySelector('.load-more'),
// }
// const ApiService = new fetchPixaApiService();
// const lightbox = new SimpleLightbox('.photo-link', {
//   overlayOpacity: 0.4,
//   animationSpeed: 100,
// });

// refs.searchForm.addEventListener('submit', onSearchForm);
// refs.loadMoreBtn.addEventListener('click', onLoadMoreBtn);


// async function onSearchForm(e) {
//   e.preventDefault();
// //inquery
//   const input = e.currentTarget.elements.searchQuery.value;
// // input.query =  e.currentTarget.elements.searchQuery;
//   if (input === '') {
//     chekIfInpIsEmpty();
//     return;
//   }

//   ApiService.resetPage();
//   ApiService.queryValue(input);

//   try {
//     const result = await ApiService.fetchPixabayData();
//     resetMarkup(); 
//     rewrightResult(result);
     
      
//     smoothScroll();
//     ApiService.setTotalHits(result.data.totalHits);
//     lightbox.refresh();
//     Notify.success(`Hooray! We found ${ApiService.totalHits} images.`);
//     showLoadBtn();
//   } catch (error) {
//     Notify.failure(
//       'Sorry, there are no images matching your search query. Please try again.',
//     );
//   }
//    chekSearchEnd();
// // "We're sorry, but you've reached the end of search results."
// } 

// async function onLoadMoreBtn() {
//     e.preventDefault();
//     smoothScroll();
    
//     const result = await ApiService.fetchPixabayData();
    
//     rewrightMarkup(result);
//     // smoothScroll();

//     if (ApiService.totalHits <= 40) {
//        notShowLoadBtn();
//        Notify.info("We're sorry, but you've reached the end of search results");
//     // chekEndOfTotalHits();
//     return;
//   }


//   ApiService.lastTotalHits();
//   lightbox.refresh();
//     Notify.success(`Hooray! We found ${ApiService.totalHits} images.`);
    
//    notShowLoadBtn();
// }

// function showLoadBtn() {
//   refs.loadMoreBtn.classList.remove('is-hidden');
// }
// function notShowLoadBtn() {
//   refs.loadMoreBtn.classList.add('is-hidden');
// }

// function resetMarkup() {
//   refs.gallery.innerHTML = '';
// }

// function rewrightMarkup(markup) {
//   refs.gallery.insertAdjacentHTML('beforeend', renderCard(markup));
// }

// function chekIfInpIsEmpty() {
//   Notiflix.failure('Please, enter something in search field!');

//   notShowLoadBtn();
//   resetMarkup();
// }

// function chekSearchEnd() {
//   notShowLoadBtn();
//   Notify.info("We're sorry, but you've reached the end of search results");
// }

// // Зробити плавне прокручування сторінки після запиту і відтворення кожної наступної групи зображень.
// function smoothScroll(){
//     const { height: cardHeight } = document
//     .querySelector(".gallery")
//     .firstElementChild.getBoundingClientRect();

//     window.scrollBy({
//     top: cardHeight * 2,
//     behavior: "smooth",
//     });
// }

// import './css/styles.css';
import NewApiService from './pixabay';
import { hitsPhotoCard } from './cardsRender';
import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import throttle from 'lodash.throttle';

const newApiService = new NewApiService();

const form = document.querySelector('#search-form');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('[data-action="load-more"]');


form.addEventListener('submit', onFormSubmit);
loadMoreBtn.addEventListener('click', onLoadMore);
loadMoreBtn.classList.add('is-hidden');

function onFormSubmit(e) {
  e.preventDefault();
  clearCardSet();
 
  loadMoreBtn.classList.add('is-hidden');
  newApiService.resetPage();
  newApiService.query = e.currentTarget.elements.searchQuery.value;

  if (newApiService.query.trim() === '') {
    chekIfInpIsEmpty();
    return;
  }

  smoothScroll();

  newApiService
    .fetchData()
    .then(({ totalHits, hits }) => {
      Notify.success(`Hooray! We found ${totalHits} images!`);
      hitsPhotoCard(hits);
      
      loadMoreBtn.classList.remove('is-hidden');

      // if (newApiService === 1) {
      //   loadMoreBtn.classList.add('is-hidden');
      //   Notify.info(
      //     "We're sorry, but you've reached the end of search results."
      //   );
      //   return;
      // }
    })
      .catch(error =>
       Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.',
      )); 
}


function onLoadMore() {
  // e.preventDefault();
  smoothScroll();
  newApiService.fetchData().then(({ hits }) => {
    if (newApiService.nowPage() <= 40) {
      
      loadMoreBtn.classList.add('is-hidden');
      Notify.info(
          "We're sorry, but you've reached the end of search results."
        );
        return;
    }
    hitsPhotoCard(hits);
  });
}

function clearCardSet() {
  gallery.innerHTML = '';
}


function chekIfInpIsEmpty() {
  Notify.failure('Please, enter something in search field!');

  loadMoreBtn.classList.add('is-hidden');
  clearCardSet();
}


// Зробити плавне прокручування сторінки після запиту і відтворення кожної наступної групи зображень.
function smoothScroll(){
    const { height: cardHeight } = document
    .querySelector(".gallery")
    // .firstElementChild.getBoundingClientRect();

    window.scrollBy({
    top: cardHeight * 2,
    behavior: "smooth",
    });
}





