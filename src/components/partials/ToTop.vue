<script>
export default {
  name: 'ToTop',
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' 
      });
    }
  }
}
</script>

<template>
  <div class="to-top" @click="scrollToTop">
    <i class="fa-solid fa-arrow-up"></i>
  </div>
</template>

<style lang="scss" scoped>
@use '../../scss/main.scss' as *;

.to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: $active-color;
  color: $secondary-color;
  border-radius: 50%;
  padding: 10px 18px;
  cursor: pointer;
}
</style>