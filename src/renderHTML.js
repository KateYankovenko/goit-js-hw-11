import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');

export function renderCard() {
  const markup = `<a href='{{largeImageURL}}' class='photo-link'>
// <div class="photo-card">
//   <img src="{{webformatURL}}" alt="{{tags}}" loading="lazy"/></a>
//   <div class="info">
//     <p class="info-item">
//       <b>Likes {{likes}}</b>
//     </p>
//     <p class="info-item">
//       <b>Views {{views}}</b>
//     </p>
//     <p class="info-item">
//       <b>Comments {{comments}}</b>
//     </p>
//     <p class="info-item">
//       <b>Downloads {{downloads}}</b>
//     </p>
//   </div>
// </div>
// </a>`;
  
    galleryEl.insertAdjacentHTML('beforeend', markup);
}


// {{#each data.hits}}
// <a href='{{largeImageURL}}' class='photo-link'>
// <div class="photo-card">
//   <img src="{{webformatURL}}" alt="{{tags}}" loading="lazy"/></a>
//   <div class="info">
//     <p class="info-item">
//       <b>Likes {{likes}}</b>
//     </p>
//     <p class="info-item">
//       <b>Views {{views}}</b>
//     </p>
//     <p class="info-item">
//       <b>Comments {{comments}}</b>
//     </p>
//     <p class="info-item">
//       <b>Downloads {{downloads}}</b>
//     </p>
//   </div>
// </div>
// </a>
// {{/each}}


//   {{!-- <a href='' class='photo-link'>
//   <img src='' alt='' loading='lazy' /> --}}