import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector(".form");
const input = document.querySelector('.input');

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const inputValue = input.value;
    
    if (!inputValue.trim()) {
        iziToast.error({
                    title: 'Error',
                    message: 'Sorry, you send empty filed',
                    position:'topRight'
        });

        return;
    }

    clearGallery();
    showLoader();
    
    
    getImagesByQuery(inputValue)
        .then((res) => {
            
            if (res.length === 0) {
                iziToast.error({
                    title: 'Error',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position:'topRight'
                });
            } else {
                createGallery(res);
                event.target.reset()
                
            }
        })
        .catch((error) => {
            iziToast.error({
                    title: 'Error',
                    message: `Sorry, error is ${error.message}`,
                    position:'topRight'
            });
        })
        .finally(() => {
            hideLoader();
        })
    
}