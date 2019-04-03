<template>
  <v-timeline align-top>
    <div data-aos="flip-left" data-aos-duration="2500">
    <v-timeline-item
      v-for="(item, i) in items"
      :key="i"
      :color="item.color"
      :icon="item.icon"
      fill-dot
    >
      <v-card      >
        <v-card-title class="title"><h1> {{ item.title }} </h1></v-card-title>
        <v-card-text class="white text--primary">
          <p>{{ item.parrafo }}</p>
        </v-card-text>
      </v-card>
    </v-timeline-item>
    </div>
  </v-timeline>
</template>


<script>
  export default {
    data: () => ({
      items: [
        {
          parrafo: 'Se llega a miles de clientes a través de una herramienta de las más poderosas del marketing digital como son las Redes Sociales. Además de mantener una comunicación activa, se pueden ofrecer de manera periódica promociones a los clientes o informales de los beneficios que ponés a su disposición.',
          title: 'Marketing Digital',
          color: 'red lighten-2',
          icon: 'fas fa-share-alt'
        },
        {
          parrafo: 'Diseñamos tu web totalmente integrada con las redes sociales, aprovechando el 100% del navegador y perfectamente visualizables en todos los dispositivos móviles.',
          title: 'Diseño web',
          color: 'purple darken-1',
          icon: 'fas fa-laptop'
        },
        {
          parrafo: 'Comunicar una idea consolidada, una imagen consistente y clara es nuestro principal objetivo. Es así como podemos tanto comenzar un proyecto desde cero comoredireccionar el rumbo de una imagen ya planteada, lo que muestra la versatilidad de nuestro equipo de trabajo. Que tu empresa comunique lo que necesita en cada momento y lugar es nuestro es para nosotros el desafío a vencer.',
          title:'Creatividad y marca personal',
          color: 'green lighten-1',
          icon: 'fas fa-mobile-alt'
        },
        
      ]
    })
  }
</script>

<style scoped>
.h1, h1 {
    font-family: 'Ubuntu', sans-serif;
}
.v-timeline {
    padding-top: 24px;
    position: relative;
    background-color: #f8f9fa;
}
</style>
