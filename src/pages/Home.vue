<script>
import Hero from '../components/Hero.vue';
import Technologies from '../components/Technologies.vue';
import Projects from '../components/Projects.vue';

export default {
    name: 'Home',
    components: {
    Hero,
    Technologies,
    Projects
  }
}

</script>

<template>
    <Hero />
    <Technologies />
    <Projects />
</template>

<style lang="scss">
@use '../scss/main.scss' as *;
</style>