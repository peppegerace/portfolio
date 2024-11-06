<script>
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import ToTop from './components/partials/ToTop.vue';
import Technologies from './components/Technologies.vue';
import Projects from './components/Projects.vue';

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    ToTop,
    Technologies,
    Projects
  }
}
</script>

<template>
  <Header />
  <ToTop />
  <div class="wrapper">

    <RouterView />

  </div>
</template>

<style lang="scss">
@use './scss/main.scss' as *;

</style>
