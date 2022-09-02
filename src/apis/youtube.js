import axios from 'axios';
const KEY = 'AIzaSyAwrH1UPkxBiB5WLhnxSbMXx64hLuiNaGw';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    key: KEY,
    part: 'snippet',
    maxResults: 5,
    type: 'video',
  },
});
