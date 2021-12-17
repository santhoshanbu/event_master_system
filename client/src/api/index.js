import axios from 'axios';

const url = 'http://localhost:5000/posts';


export const fetchManagers = () => axios.get(url)
export const createManager = (manager) => axios.post(url, manager)