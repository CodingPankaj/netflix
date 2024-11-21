// import { openModal } from "../../main";
import moviesIN from "../api/showData/moviesIN.json"
import tvshowsIN from "../api/showData/tvshowsIN.json"
import moviesEn from "../api/showData/moviesEN.json"
import moviesOther from "../api/showData/moviesOther.json"
import tvshowsEn from "../api/showData/tvshowsEN.json"
import tvshowsOther from "../api/showData/tvshowsOther.json"
import { UpdateApiUrl } from "./UpdateApiUrl"


// Modals Containers and selectors
const modal = document.querySelector("#modal")
const modalContainer = document.querySelector("#modal-container")
const modalCloseBtn = modal.querySelector("#modal-close-btn")
const body = document.body


// Close Modal function
const closeModal = () => {
    if(!modal.classList.contains("invisible")) {
        modal.classList.add("invisible")
        body.classList.remove("overflow-hidden")
    }
}

// Close modal on close button click
modalCloseBtn.addEventListener("click", closeModal)

// Close modal on bg click
modal.addEventListener("click", (e) => {
    if(e.target.id === "modal") {
        closeModal() 
    }
})

// Function to Open Modal
const openModal = () => {
    modal.classList.remove("invisible")
}

// Function to update Movie Card NodeList
export const updateMovieCardsNode = () => {
    const allCards = document.querySelectorAll(".movie-cards")
    Modal(allCards)
}

// Function to open Modal
export const Modal = (cardID) => {
    cardID.forEach(item => {
        item.addEventListener("click", () => {
            let key = item.getAttribute("key")
            createModal(key)
            openModal()
            body.classList.add("overflow-hidden")
        })
    })
}



// Function to Create Modal
export const createModal = (key) => {
    let apiUrl = UpdateApiUrl()

    const { backdrop, title_image, release_year, certification, type, genre, poster } = apiUrl[key]

    let allGenre = genre.map(item => `<li class="px-1 py-[3px] bg-[rgb(65,65,65)] text-semi-white md:text-sm text-[10px] text-center rounded">${item}</li>`).join('');

    modalContainer.innerHTML = `<div>
        <figure class="min-h-[153px] h-full relative isolate overflow-hidden">
        <img class="h-full w-full object-cover absolute left-0 top-0 z-[-1]" src="${poster}" />
        <img class="md:min-h-[375px] max-h-[375px] min-h-[153px] w-full object-cover fade-img" src="${backdrop}" alt="">
        <div class="p-4 w-full h-full flex items-end absolute top-0 left-0 bg-backdrop blur-bg">
            <img class="md:h-[100px] sm:h-[80px] h-[50px]" src="${title_image}" />
        </div>
        </figure>
        <div class="md:px-10 md:pb-10 px-4 pb-6 pt-4">
        <div>
            <div>
            <ul class="md:mb-0 mb-4 flex gap-2 flex-wrap">
                <li class="px-1 py-[3px] bg-[rgb(65,65,65)] text-semi-white md:text-sm text-[10px] text-center rounded">${release_year}</li>
                <li class="px-1 py-[3px] bg-[rgb(65,65,65)] text-semi-white md:text-sm text-[10px] text-center rounded">${certification}</li>
                <li class="px-1 py-[3px] bg-[rgb(65,65,65)] text-semi-white md:text-sm text-[10px] text-center rounded">${type}</li>
                ${allGenre}
            </ul>
            </div>
    
            <div class="pt-4">
            <p class="md:text-base text-sm leading-tight text-white">${apiUrl[key].description}</p>
        </div>

            <div class="md:pt-10 pt-6">
            <button class="md:w-auto w-full py-2 px-6 flex justify-center items-center gap-4 bg-primary-red text-white text-nowrap md:text-lg text-base rounded hover:bg-hover-red">
            Get Started
            <span class="md:w-[11px] w-[8px] md:h-[11px] h-[8px] border-t-2 border-r-2 border-gray-100 rotate-45"></span>
            </button>
        </div>
        </div>
        </div>
    </div>`
}
