import { updateMovieCardsNode } from "./Modal"
import { sliderCard, resetSlide } from "./Slider"
import { UpdateApiUrl } from "./UpdateApiUrl"


// Dom Select box
const selectCountry = document.querySelector("#selectCountry")
export const selectType = document.querySelector("#selectType")


// Options For Select Box
const selectOptions = [
    [
        { value: "movies", optionText: "Movies" },
        { value: "tvshows", optionText: "TV Shows" }
    ],
    [
        { value: "movies-english", optionText: "Movies - English" },
        { value: "movies-other-languages", optionText: "Movies - Other languages" },
        { value: "tvshows-english", optionText: "TV Shows - English" },
        { value: "tvshows-other-languages", optionText: "TV Shows - Other languages" }
    ]
]


// Trending Shows Select Function
export const trendingShowOptions = () => {
    if (selectCountry.value === "india") {
        selectType.innerHTML = selectOptions[0].map(item => `<option value="${item.value}" class="bg-white text-black">${item.optionText}</option>`)
    } else if (selectCountry.value === "global") {
        selectType.innerHTML = selectOptions[1].map(item => `<option value="${item.value}" class="bg-white text-black">${item.optionText}</option>`)
    }
}


// Function to change movie card url
const changeMovieData = () => sliderCard(UpdateApiUrl());

// Change option of 1st select field when select field option is changed
selectCountry.addEventListener("change", () => {
    trendingShowOptions()
    changeMovieData()
    updateMovieCardsNode()
    resetSlide(0)
})

// Change slider card data url when 2nd select box option is changed
selectType.addEventListener("change", () => {
    changeMovieData()
    updateMovieCardsNode()
    resetSlide(0)
})