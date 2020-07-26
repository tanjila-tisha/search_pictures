import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 5NEy2lHiJkdRbyCzfl7CuppM63Y7fKt6HKr_mtXHqDo'
    }
});