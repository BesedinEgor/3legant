import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import mobileNav from './modules/mobile-nav.js';

const productSwiper = new Swiper('.products-swiper', {
    slidesPerView: 1.6,
    loop: false,
    spaceBetween: 16,
    pagination: {
      el: '.products-swiper-pagination',
    },
  });


mobileNav();
