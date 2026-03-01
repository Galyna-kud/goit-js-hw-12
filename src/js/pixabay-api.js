import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "54692285-0e8498ada734ef5e15a7b52ba";

export async function getImagesByQuery(query, page=1) {
    return await axios(BASE_URL, {
        params: {
            key: API_KEY,
            q: query,
            page,
            per_page: 15,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true
        }
    }).then(res => res.data)
}