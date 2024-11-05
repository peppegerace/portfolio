<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade'; 

import { Pagination, Navigation, Autoplay, EffectFade } from 'swiper/modules';

export default {
  name: 'SwiperTechnologies',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const technologies = [
      { name: 'HTML5', icon: 'fab fa-html5' },
      { name: 'CSS3', icon: 'fab fa-css3-alt' },
      { name: 'JavaScript', icon: 'fab fa-js' },
      { name: 'Node.js', icon: 'fab fa-node' },
      { name: 'Vue.js', icon: 'fab fa-vuejs' },
      { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
      { name: 'PHP', icon: 'fab fa-php' },
      { name: 'Laravel', icon: 'fab fa-laravel' },
      { name: 'Java 8', icon: 'fab fa-java' },
    ];

    return {
      modules: [Pagination, Navigation, Autoplay, EffectFade],
      technologies,
    };
  },
};
</script>

<template>
  <div class="technologies">

    <div class="container-fluid">
      <h2>Le Tecnologie che ho usato per i miei progetti:</h2>
      <swiper
        :breakpoints="{
          0: {
            slidesPerView: 4, 
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 6, 
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 8, 
            spaceBetween: 30,
          }
        }" 
        :loop="true" 
        :autoplay="{ delay: 0, disableOnInteraction: false }" 
        :speed="4000"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="(tech, index) in technologies" :key="index">
          <i :class="tech.icon"></i>
          <span>{{ tech.name }}</span>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<style lang="scss">
@use '../scss/main.scss' as *;

.technologies h2 {
  font-size: 2rem;
  margin-bottom: 24px;
}

.mySwiper {
  width: 100%; 
  height: 100px; 
}

.swiper-slide {
  display: flex;
  flex-direction: column; 
  align-items: center; 
  justify-content: center; 
  font-size: 16px;
}

.swiper-slide i {
  font-size: 40px; 
  margin-bottom: 5px; 
}
</style>