import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://blog-lab63.firebaseio.com/'
});

export default instance;