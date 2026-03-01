import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const ulCard = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

const lightBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250
})

function createMarkup(arr) {
    return arr.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => 
        `<li class="list-item">
            <a href="${largeImageURL}">
                <img src="${webformatURL}" alt="${tags}"  width="360"/>
            </a>

            <div class="wrapper">
                <h3 class="wrapper-text">Likers <span class="wrapper-span">${likes}</span></h3>
                <h3 class="wrapper-text">Views <span class="wrapper-span">${views}</span></h3>
                <h3 class="wrapper-text">Comments <span class="wrapper-span">${comments}</span></h3>
                <h3 class="wrapper-text">Downloads <span class="wrapper-span">${downloads}</span></h3>
            </div>
        </li>`
    ).join("");

}

export function createGallery(images) {
    ulCard.innerHTML = createMarkup(images);
    lightBox.refresh();
}

export function clearGallery() {
    ulCard.innerHTML = '';
}

export function showLoader() {
    loader.classList.remove("hidden");
}

export function hideLoader() {
    loader.classList.add("hidden");
}