<script>
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import ToTop from './components/partials/ToTop.vue';
import Technologies from './components/Technologies.vue';

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    ToTop,
    Technologies
  }
}
</script>

<template>
  <Header />
  <Hero />
  <ToTop />
  <Technologies />
</template>

<style lang="scss">
@use './scss/main.scss' as *;

</style>
