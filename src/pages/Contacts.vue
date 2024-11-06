<script>
export default {
  name: 'Contacts'
}
</script>

<template>
  <div class="contacts">
    <div class="container">
      <h2>I miei contatti:</h2>
      <ul class="ps-0">
        <li>
          <a href="">
            <i class="fa-brands fa-linkedin me-3"></i>
            <span>Giuseppe Gerace</span>
          </a>
        </li>
        <li>
          <a href="">
            <i class="fa-solid fa-phone me-3"></i>
            <span>+39 3402612589</span>
          </a>
        </li>
        <li>
          <a href="">
            <i class="fa-solid fa-at me-3"></i>
            <span>giuseppe.gerace95@gmail.com</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@use '../scss/main.scss' as *;

.contacts a {
  color: $secondary-color;
}
</style>