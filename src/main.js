import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader, showLoadMoreButton, hideLoadMoreButton } from "./js/render-functions";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector(".form");
const input = document.querySelector('.input');
const btnLoader = document.querySelector(".button-load")


form.addEventListener("submit", handleSubmit);
btnLoader.addEventListener("click", onLoadMore);

let inputValue;
let totalHits;
let totalPages;
let page;

async function handleSubmit(event) {
    event.preventDefault();
    
    page = 1;
    hideLoadMoreButton();

    inputValue = input.value.trim();
    
    if (!inputValue) {
        iziToast.error({
                    title: 'Error',
                    message: 'Sorry, you send empty filed',
                    position:'topRight'
        });
        return;
    }

    clearGallery();
    showLoader();
    
    try {
        const data = await getImagesByQuery(inputValue, page);
        totalHits = data.totalHits;
        totalPages = Math.ceil(totalHits / 15);

        if (data.hits.length === 0) {
            iziToast.error({
                title: 'Error',
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight'
            });
        } else {
            createGallery(data.hits);
           
        }

        if (page < totalPages) {
            showLoadMoreButton();
        } else {
            iziToast.info({
                message:"We're sorry, but you've reached the end of search results.",
                position: 'topRight'
            });
        }

    } catch(error) {
        iziToast.error({
            title: 'Error',
            message: `Sorry, error is ${error.message}`,
            position:'topRight'
        });
    } finally {
            hideLoader();
        }
}

async function onLoadMore() {
    
    try {
        page++;
        hideLoadMoreButton();
        showLoader();
        const data = await getImagesByQuery(inputValue, page);
        createGallery(data.hits);
        scrollSmooth();

        if (page < totalPages) {
            showLoadMoreButton()
        } else {
            hideLoadMoreButton()
            iziToast.info({
                message:"We're sorry, but you've reached the end of search results.",
                position: 'topRight'
            });
        }

    } catch(error) {
        iziToast.error({
            title: 'Error',
            message: `Sorry, error is ${error.message}`,
            position:'topRight'
        });
    } finally {
        hideLoader();
    }
}

function scrollSmooth() {
    const itemCard = document.querySelector(".list-item");
    const cardHeigth = itemCard.getBoundingClientRect().height;

    window.scrollBy({
        top: cardHeigth * 2,
        behavior: "smooth"
    })
}