<script>
export default {
  name: 'ProjectDetails',
  props: ['id'], 
  data() {
    return {
      project: null, 
      projects: [
        {
          title: 'Boolflix',
          description: 'Boolflix è la replica del famoso servizio di streaming di film e serie TV.',
          image: '/img/projects/boolflix.png',
          github: 'https://github.com/peppegerace/vite-boolflix',
          technologies: [
            { name: 'HTML5', icon: 'fab fa-html5' },
            { name: 'CSS3', icon: 'fab fa-css3-alt' },
            { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
            { name: 'JavaScript', icon: 'fab fa-js' },
            { name: 'Vue.js', icon: 'fab fa-vuejs' },
          ]
        },
        {
          title: 'Boolando',
          description: 'Boolando è la replica di un e-commerce per la vendita di prodotti e servizi.',
          image: '/img/projects/boolando.png',
          github: 'https://github.com/peppegerace/vite-boolando',
          technologies: [
            { name: 'HTML5', icon: 'fab fa-html5' },
            { name: 'CSS3', icon: 'fab fa-css3-alt' },
            { name: 'JavaScript', icon: 'fab fa-js' },
            { name: 'Vue.js', icon: 'fab fa-vuejs' },
          ]
        },
        {
          title: 'Boolzapp',
          description: 'Boolzapp è la replica di un servizio di messaggistica istantanea simile a WhatsApp.',
          image: '/img/projects/boolzapp.png',
          github: 'https://github.com/peppegerace/vue-boolzapp',
          technologies: [
            { name: 'HTML5', icon: 'fab fa-html5' },
            { name: 'CSS3', icon: 'fab fa-css3-alt' },
            { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
            { name: 'JavaScript', icon: 'fab fa-js' },
            { name: 'Vue.js', icon: 'fab fa-vuejs' },
          ]
        },
        {
          title: 'Spotify',
          description: 'Spotify è la replica di un servizio di streaming musicale con playlist e brani personalizzati.',
          image: '/img/projects/spotify.png',
          github: 'https://github.com/peppegerace/html-css-spotifyweb',
          technologies: [
            { name: 'HTML5', icon: 'fab fa-html5' },
            { name: 'CSS3', icon: 'fab fa-css3-alt' },
          ]
        },
        {
          title: 'Zoom',
          description: 'Zoom è la replica di un servizio di videoconferenze per incontri online e webinar.',
          image: '/img/projects/zoom.png',
          github: 'https://github.com/peppegerace/html-css-zoom',
          technologies: [
            { name: 'HTML5', icon: 'fab fa-html5' },
            { name: 'CSS3', icon: 'fab fa-css3-alt' },
          ]
        }
      ]
    };
  },
  created() {
    this.project = this.projects[this.id];
  }
};
</script>

<template>
  <div class="project-details" v-if="project">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="details-card">
            <h2>{{ project.title }}</h2>
            <div class="detail-image">
              <img :src="project.image" :alt="project.title">
            </div>
            <div class="detail-description">
              <h4>tecnologie usate:</h4>
              <ul class="technologies-list d-flex ps-0">
                <li v-for="(tech, index) in project.technologies" :key="index" class="me-3">
                  <i :class="tech.icon"></i>
                </li>
              </ul>
              <h4>Descrizione:</h4>
              <p>{{ project.description }}</p>
            </div>
            <div class="detail-link">
              <a :href="project.github" target="_blank" class="custom-btn">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../scss/main.scss' as *;

.detail-image {
  width: 250px;
}

.github {
  background-color: $active-color;
  padding: 20px;
}
</style>