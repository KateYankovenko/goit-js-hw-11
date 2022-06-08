import axios from 'axios';

export default class NewApiService {
  constructor() {
    this.page = 1;
    this.value = '';
    this.totalHits = null;
    this.searchQuery = '';
  }

  async fetchData() {
    const API = {
      key: '27730818-b3b91ab106a7108cef17bdc3c',
      image_type: 'photo',
      safesearch: 'true',
      orientation: 'horizontal',
     
      // cookie: 'false',
    };

    return await axios
      .get(
        `https://pixabay.com/api/?key=27730818-b3b91ab106a7108cef17bdc3c&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=40`,
      )
      .then(object => {
        this.increasePage();
        return {
          totalHits: object.data.totalHits,
          hits: object.data.hits,
        };
      })
      .catch(error => console.log(error));

  }
  resetPage() {
    this.page = 1;
  }
  increasePage() {
    this.page += 1;
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}






// async fetchPixabayData() {
//     const BASIC_URL = 'https://pixabay.com/api/';
//     const API_KEY = '27730818-b3b91ab106a7108cef17bdc3c';
//     const queryString = `q=${this.value}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=40`;
//     const response = await axios.get(`${BASIC_URL}?key=${API_KEY}&${queryString}`);
   
    
//     if (!response.data.total) {
//       throw new Error('error');
//     }
//       return response;
//     }
//     resetPage() {
//         this.page = 1;
//     }
//     increasePage() {
//     this.page += 1;
//   }
//     queryValue(newValue) {
//     this.value = newValue;
//   }
//     inTotalHits(hits) {
//     this.totalHits = hits;
//   }
//    lastTotalHits() {
//     this.totalHits -= 40;
//   }
//   }
    


