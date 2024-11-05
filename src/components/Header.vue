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
                <li class="me-3">Progetti</li>
                <li class="me-3">Chi sono</li>
                <li class="me-3">Contatti</li>
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
  // padding: 20px 0;
}
</style>