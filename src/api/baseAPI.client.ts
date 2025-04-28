import axios from 'axios';

const apiKey = import.meta.env.VITE_API_KEY;

if (!apiKey) {
  console.error('VITE_API_KEY is missing in .env');
}

export const baseAPIClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '', // optional: you can configure the API URL too
  headers: {
    'X-API-KEY': apiKey,
  },
});