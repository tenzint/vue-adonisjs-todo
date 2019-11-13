import axios from 'axios';
import store from './store';

export default () => axios.create({
  baseURL: store.state.baseURL,
  timeout: 1000,
});