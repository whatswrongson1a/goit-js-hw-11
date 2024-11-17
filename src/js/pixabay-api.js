const API_KEY = '47115642-a97741713bebc955e7d8d0e17';  
const BASE_URL = 'https://pixabay.com/api/';

export const searchImages = async (query) => {
  const url = `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch images');
  }

  const data = await response.json();
  return data.hits;  
};