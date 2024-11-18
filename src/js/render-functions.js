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

// Когда отправляется форма поиска, показываем лоадер
document.querySelector('.search-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const query = document.querySelector('input[name="query"]').value.trim();

  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search term.',
    });
    return;
  }

  // Очищаем галерею и показываем лоадер перед загрузкой данных
  clearGallery(); 
  showLoader(); // Показываем лоадер, когда начинаем загрузку

  try {
    const images = await searchImages(query);

    if (images.length === 0) {
      iziToast.error({
        title: 'Error',
        message: 'Sorry, no images found for your search.',
      });
    } else {
      renderImages(images);
      const lightbox = new SimpleLightbox('.gallery a');
      lightbox.refresh();
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again.',
    });
  } finally {
    hideLoader(); // Скрываем лоадер, когда данные загружены
  }
});



