<script>
export default {
  name: 'Hero'
}
</script>

<template>
  <div class="hero">
    <div class="container-fluid h-100">
      <div class="row h-100">
        <div class="col h-100">
          <div class="text-hero">
            <h1 class="title">Benvenuti!</h1>
            <p>Sono Giuseppe Gerace, Full Stack Web Developer di Taurianova, paese in provincia di Reggio Calabria, Italia.<br>
              Ho lavorato a diversi progetti sia lato front-end che lato back-end. In questo sito andremo a vedere i progetti a cui tengo di più.
            </p>
          </div>
        </div>
        <div class="col d-none d-md-block h-100">
          <div class="image-hero h-100">
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use '../scss/main.scss' as *;

.hero {
  height: 600px;
  padding: 50px 0;
}

.text-hero {
  padding: 20px;
  .title {
    margin-bottom: 24px;
  }
}

.image-hero {
  position: relative;
  padding: 20px;
  background-image: url(img/hero-portfolio.webp);
  background-position: center;
  background-size: cover;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.3); 
    z-index: 1; 
  }
}

</style>