<script>
export default {
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          title: 'Boolflix',
          description: 'Boolflix è la replica del famoso servizio di streaming di film e serie TV.',
          image: '/img/projects/boolflix.png'
        },
        {
          title: 'Boolando',
          description: 'Boolando è la replica di un e-commerce per la vendita di prodotti e servizi.',
          image: '/img/projects/boolando.png'
        },
        {
          title: 'Boolzapp',
          description: 'Boolzapp è la replica di un servizio di messaggistica istantanea simile a WhatsApp.',
          image: '/img/projects/boolzapp.png'
        },
        {
          title: 'Spotify',
          description: 'Spotify è la replica di un servizio di streaming musicale con playlist e brani personalizzati.',
          image: '/img/projects/spotify.png'
        },
        {
          title: 'Zoom',
          description: 'Zoom è la replica di un servizio di videoconferenze per incontri online e webinar.',
          image: '/img/projects/zoom.png'
        }
      ]
    }
  }
}
</script>

<template>
  <div class="projects">
    <div class="container">
      <h2>I miei progetti</h2>
      <div class="row">
        <div class="col-12 col-md-6 col-lg-4 custom-col" v-for="(project, index) in projects" :key="index">
          <div class="project-card">
            <div class="project-image">
              <img :src="project.image" :alt="project.title">
            </div>
            <div class="project-description">
              <h4 class="title-card">{{ project.title }}</h4>
              <a class="custom-btn">dettagli</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use '../scss/main.scss' as *;

.projects {
  padding-bottom: 50px;
}

.projects h2 {
  text-transform: capitalize;
  font-size: 2rem;
  margin-bottom: 24px;
}
.projects .custom-col {
  padding: 20px;
}
.project-card {
  background-color: $secondary-color;
  padding: 20px;
  border-radius: 16px;
  color: $primary-color;
  .project-image {
    margin-bottom: 16px;
  }
  .title-card {
    font-weight: bold;
    margin-bottom: 16px;
  }
}
</style>