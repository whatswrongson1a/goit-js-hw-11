export const renderImages = (images) => {
    const gallery = document.querySelector('.gallery');
    
    const markup = images.map(image => `
      <a href="${image.largeImageURL}">
        <img src="${image.webformatURL}" alt="${image.tags}" />
      </a>
    `).join('');
  
    gallery.innerHTML = markup; 
  };
  
  export const clearGallery = () => {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = ''; 
  };
  
  export const showLoader = () => {
    const loader = document.querySelector('.loader');
    loader.classList.remove('hidden');
  };
  
  export const hideLoader = () => {
    const loader = document.querySelector('.loader');
    loader.classList.add('hidden');
  };