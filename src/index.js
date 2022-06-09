// // error_reporting(E_ERROR | E_PARSE);
// import './css/styles.css';

import NewApiService from './pixabay';
import { hitsPhotoCard } from './cardsRender';
import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const newApiService = new NewApiService();

const refs = {
  form: document.querySelector('#search-form'),
  gallery: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'), 
}
//some variable for noti messages
let cardsLeft;

refs.loadMoreBtn.classList.add('is-hidden');

refs.form.addEventListener('submit', onFormSubmit);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onFormSubmit(e) {
  e.preventDefault();
  clearCardSet();
  smoothScroll();
  refs.loadMoreBtn.classList.add('is-hidden');
  newApiService.resetPage();
  newApiService.query = e.currentTarget.elements.searchQuery.value;


  if (newApiService.query === '') {
    Notify.failure('Please fill in the field');
    return;
  }
  newApiService
    .fetchData()
    .then(({ totalHits, hits }) => {
      //hits are in the array of hits
      if (hits.length === 0) {
        Notify.failure(
          'Sorry, there are no images matching your search query. Please try again',
        );
        return;
      }
      Notify.success(`Hooray! We found ${totalHits} images!`);
      hitsPhotoCard(hits);

      refs.loadMoreBtn.classList.remove('is-hidden');

      if (cardsLeft === 1) {
        refs.loadMoreBtn.classList.add('is-hidden');
        Notify.info(
          "We're sorry, but you've reached the end of search results."
        );
        return;
      }
    })
    .catch(error=>console.log(error));
    // .catch(error => { console.log(Notify.failure(
    //     'Sorry, there are no images matching your search query. Please try again.',
    //   )) });
}


function onLoadMore() {
  smoothScroll();
  newApiService.fetchData().then(({ hits }) => {
    if (newApiService.query === cardsLeft) {
      refs.loadMoreBtn.classList.add('is-hidden');
      return;
    }
    hitsPhotoCard(hits);
  });
}


function clearCardSet() {
  refs.gallery.innerHTML = '';
}

// function chekIfInpIsEmpty() {
//   Notify.failure('Please, enter something in search field!');

//   loadMoreBtn.classList.add('is-hidden');
//   clearCardSet();
// }

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


// function rewrightMarkup(markup) {
//   refs.gallery.insertAdjacentHTML('beforeend', renderCard(markup));
// }


// function chekSearchEnd() {
//   notShowLoadBtn();
//   Notify.info("We're sorry, but you've reached the end of search results");
// }








