import axios from 'axios';

const KEY = 'AIzaSyAOubrf-aSAsy-xT38WxAc0gzSz2lvModI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});