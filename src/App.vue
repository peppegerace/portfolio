<script>
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import ToTop from './components/partials/ToTop.vue';


export default {
  name: 'App',
  components: {
    Header,
    Hero,
    ToTop
  }
}
</script>

<template>
  <Header />
  <Hero />
  <ToTop />

</template>

<style lang="scss">
@use './scss/main.scss' as *;

</style>
