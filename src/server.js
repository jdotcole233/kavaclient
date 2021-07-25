import axios from 'axios';
export const baseURL = `http://brokerextension.comfybroker.com/api`
export default axios.create({ baseURL });