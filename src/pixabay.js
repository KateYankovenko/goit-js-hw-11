//fetch functions should be written in separate
//file from main js
import axios from 'axios';
// console.log(axios);

export default class fetchPixaApiService {
  constructor() {
    this.page = 1;
    this.value = '';
    this.totalHits = null;
  }


async fetchPixabayData() {
    const BASIC_URL = 'https://pixabay.com/api/';
    const API_KEY = '27730818-b3b91ab106a7108cef17bdc3c';
    const queryString = `q=${this.value}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=40`;
    const response = await axios.get(`${BASIC_URL}?key=${API_KEY}&${queryString}`);
   
    
    if (!response.data.total) {
      throw new Error('error');
    }
      return response;
    }
    resetPage() {
        this.page = 1;
    }
    increasePage() {
    this.page += 1;
    }
    inTotalHits(hits) {
    this.totalHits = hits;
  }
   lastTotalHits() {
    this.totalHits -= 40;
  }
  }
    


