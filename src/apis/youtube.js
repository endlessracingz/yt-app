import axios from 'axios';

const KEY = 'AIzaSyDuTGT94oXyyuiCv2GC6zxphLmKEyzp5tg';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});