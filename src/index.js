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