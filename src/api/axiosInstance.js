import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: "https://www.naver.com",
    headers: {
        'Content-Type' : 'application/json',
    },
});