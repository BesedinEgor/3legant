import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const productSwiper = new Swiper(".products-swiper", {
    slidesPerView: "auto",
    loop: false,
    spaceBetween: 16,
    pagination: {
      el: ".products-swiper-pagination",
    },
  });

  export default productSwiper;