import axios  from 'axios';
import Constants from 'expo-constants';

axios.defaults.baseURL = Constants.manifest.extra.baseUrl;
export const api = axios;
export const BACKGROUND_DEFAULT_IMAGE_DETAILS = require('../../assets/images/book-background.png');
export const DEFAULT_BOOK_COVER = require('../../assets/images/default-book.png');