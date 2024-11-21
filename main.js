import { trendingShowOptions } from './src/components/TrendingSelect.js';
import moviesIN from "./src/api/showData/moviesIN.json";
import SliderControl, { sliderCard } from './src/components/Slider.js';
import { reasonToJoinCards } from './src/components/ReasonToJoin.js';
import { FaqAccordion } from "./src/components/FaqAccordion.js";
import { Modal, createModal, updateMovieCardsNode } from './src/components/Modal.js';


document.addEventListener("DOMContentLoaded", () => {

    // Trending Shows Select Function
    trendingShowOptions()

    // Slider
    SliderControl()
    sliderCard(moviesIN)

    // Reason to Join (3rd Section)
    const reasonToJoinContainer = document.querySelector("#reason-to-join")
    reasonToJoinCards(reasonToJoinContainer)

    // Faq (Accordion Section)
    const FAQ_Container = document.querySelector("#faq-container")
    FaqAccordion(FAQ_Container)

    // Update Movie card Node List for Running forEach Loop
    updateMovieCardsNode()

    // Function to show Get started button in mobile on scroll
    const mobileGetStartedBtn = document.querySelector("#mobile-get-started-btn")
    window.addEventListener("scroll", () => {
        if (window.scrollY > 150 && window.scrollY < 2000) {
            mobileGetStartedBtn.style.bottom = "0";
        } else {
            mobileGetStartedBtn.style.bottom = "-100%";
        }
    })
})



