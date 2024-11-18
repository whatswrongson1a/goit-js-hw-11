import iziToast from "izitoast";
import SimpleLightbox from "simplelightbox";
import "izitoast/dist/css/iziToast.min.css";
import "simplelightbox/dist/simple-lightbox.min.css";
import { searchImages } from "./js/pixabay-api.js";
import { renderImages, clearGallery, showLoader, hideLoader } from "./js/render-functions.js";

// Отримуємо посилання на форму
const form = document.querySelector('.search-form');
const input = form.querySelector('input[name="query"]');
const gallery = document.querySelector('.gallery');

// Перевіряємо, чи всі необхідні елементи існують у DOM
if (!form || !input || !gallery) {
  console.error("Required DOM elements are missing. Check your HTML structure.");
  throw new Error("Initialization failed. Missing DOM elements.");
}

const handleSubmit = async (event) => {
  event.preventDefault();

  const query = input.value.trim();
  if (query === "") {
    iziToast.error({
      title: "Error",
      message: "Please enter a search term.",
    });
    return;
  }

  clearGallery();
  showLoader();

  try {

    const images = await searchImages(query);

    if (images.length === 0) {
      iziToast.error({
        title: "Error",
        message: "Sorry, no images found for your search.",
      });
    } else {
      renderImages(images);

      const lightbox = new SimpleLightbox('.gallery a');
      lightbox.refresh();
    }
  } catch (error) {
    iziToast.error({
      title: "Error",
      message: "Something went wrong. Please try again.",
    });
    console.error("Error during image fetching:", error);
  } finally {
    hideLoader();
  }
};

form.removeEventListener('submit', handleSubmit);
form.addEventListener('submit', handleSubmit);

