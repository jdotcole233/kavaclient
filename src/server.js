import axios from 'axios';
export const baseURL = `https://brokerextension.comfybroker.com/api`;
export default axios.create({ baseURL });