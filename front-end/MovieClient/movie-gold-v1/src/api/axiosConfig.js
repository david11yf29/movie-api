import axios from 'axios';

export default axios.create({
    baseURL: 'https://9f3c-27-52-96-154.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning":"true"}
})