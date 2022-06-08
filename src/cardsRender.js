import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const newGallery = new SimpleLightbox('.newgallery');

export function hitsPhotoCard(cards) {
  const markup = cards
    .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
      return `<div class="photo-card">
  <a href="${largeImageURL}" class='photo-link'>
    <img src="${webformatURL}" alt="${tags}" loading="lazy" height="190px"/>
  </a>
  <div class="card-info">
    <p class="card-item">
      <b>Likes: <br>${likes}</b>
    </p>
    <p class="card-item">
      <b>Views: <br>${views}</b>
    </p>
    <p class="card-item">
      <b>Comments: <br>${comments}</b>
    </p>
    <p class="card-item">
      <b>Downloads: <br>${downloads}</b>
    </p>
  </div>
</div>`;
    }).join('');
  gallery.insertAdjacentHTML('beforeend', markup);
  newGallery.refresh();
}



// const gallery = document.querySelector('.gallery');
// const newGallery =  new SimpleLightbox('.newgallery');


// export function hitsPhotoCard(cards) {
//   const markup = cards
//     .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
//       return `<div class="photo-card">
//   <a class="gallery__item" href="${largeImageURL}">
//     <img src="${webformatURL}" alt="${tags}" loading="lazy" height="190px"/>
//   </a>
//   <div class="info">
//     <p class="info-item">
//       <b>Likes: <br>${likes}</b>
//     </p>
//     <p class="info-item">
//       <b>Views: <br>${views}</b>
//     </p>
//     <p class="info-item">
//       <b>Comments: <br>${comments}</b>
//     </p>
//     <p class="info-item">
//       <b>Downloads: <br>${downloads}</b>
//     </p>
//   </div>
// </div>`;
//     }).join('');
// 
//   gallery.insertAdjacentHTML('beforeend', markup);
//   newGallery.refresh();
// }


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