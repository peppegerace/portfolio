<script>
export default {
  name: 'Header'
}
</script>

<template>
  <header>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="menu">
            <nav>
              <ul class="d-flex justify-content-center">
                <li class="me-3">
                  <router-link :to="{name: 'home'}" class="router-link">Home</router-link>
                </li>
                <li class="me-3">
                  <router-link :to="{name: 'projects'}" class="router-link">Progetti</router-link>
                </li>
                <li class="me-3">
                  <router-link :to="{name: 'contacts'}" class="router-link">Contatti</router-link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
@use '../scss/main.scss' as *;

header {
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>