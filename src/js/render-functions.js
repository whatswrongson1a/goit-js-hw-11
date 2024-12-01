export const renderImages = (images) => {
  const gallery = document.querySelector('.gallery');
  
  const markup = images
    .map(
      ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
        <div class="gallery__item">
          <a href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}" loading="lazy" />
          </a>
          <div class="photo-info">
            <p><b>Likes:</b> ${likes}</p>
            <p><b>Views:</b> ${views}</p>
            <p><b>Comments:</b> ${comments}</p>
            <p><b>Downloads:</b> ${downloads}</p>
          </div>
        </div>
      `
    )
    .join('');

  gallery.innerHTML = markup; // Insert the markup into the gallery container
};

export const clearGallery = () => {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = ''; // Clear the gallery
};

// Функция для отображения лоадера
export const showLoader = () => {
  const loader = document.querySelector('.loader');
  loader.classList.remove('hidden'); // Убираем класс hidden, чтобы лоадер отобразился
};

// Функция для скрытия лоадера
export const hideLoader = () => {
  const loader = document.querySelector('.loader');
  loader.classList.add('hidden'); // Добавляем класс hidden, чтобы скрыть лоадер
};



