import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import "./Slider.css";

let swiper;
// Function to create and initialize the Swiper slider
export default function SliderControl() {
  swiper = new Swiper('.swiper-container', {
    loop: false,
    slidesPerView: 2.4,
    spaceBetween: 2,
    slidesPerGroup: 2,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1920: { slidesPerView: 4.72, slidesPerGroup: 4, spaceBetween: 15, },
      1280: { slidesPerView: 6, slidesPerGroup: 5, spaceBetween: 10, },
      960: { slidesPerView: 5, slidesPerGroup: 4, spaceBetween: 8, },
      600: { slidesPerView: 4, slidesPerGroup: 2, spaceBetween: 5, },
    },
  });
}

// Reset Slider Slide to 0
export const resetSlide = (num) => {
  swiper.slideTo(num);
};

// Slider Card Container
const sliderCardContainer = document.querySelector(".swiper-wrapper")

// Movies Card (Slider Card)
export const sliderCard = (movieData) => {

  sliderCardContainer.innerHTML = ""

  movieData.map((item, index) => {
    sliderCardContainer.innerHTML += `<div class="swiper-slide lg:px-5 md:px-4 px-3 py-2 transition-[0.2s_ease] md:hover:!scale-[1.05] hover:!scale-[1.03]">
          <div class="movie-cards w-full rounded-lg overflow-hidden cursor-pointer" key="${index}">
            <img class="w-full" src="${item.poster}">
            <span class="absolute left-0 bottom-0 xl:text-[120px] lg:text-[100px] md:text-[80px] text-[64px] font-bold text-stroke">${index+1}</span>
          </div>
        </div>`
  })
}
