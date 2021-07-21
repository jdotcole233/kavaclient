import axios from 'axios';
export const baseURL = `http://192.168.100.2:8001/api`
export default axios.create({ baseURL });