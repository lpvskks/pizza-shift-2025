import axios from "axios";

const instance = axios.create({
    baseURL: 'https://shift-intensive.ru/api',
});

export { instance };