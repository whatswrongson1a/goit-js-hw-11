import iziToast from "izitoast";
import SimpleLightbox from "simplelightbox";
import "izitoast/dist/css/iziToast.min.css";
import "simplelightbox/dist/simple-lightbox.min.css";
import { searchImages } from "./js/pixabay-api.js";
import { renderImages, clearGallery, showLoader, hideLoader } from "./js/render-functions.js";

  const query = document.querySelector('input[name="query"]').value.trim();
  if (query === "") {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search term.',
    });
    hideLoader(); 
    return;
  }

  clearGallery(); 
  showLoader();

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
    hideLoader();
  }
});
