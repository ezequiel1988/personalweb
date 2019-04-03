<template>
  <v-carousel hide-controls interval="8000">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    >


     <div class="title">



      <h1>  {{ item.title }} </h1>






      <p class="text-xs-center"> {{ item.text }} </p>




     </div>

  </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://images.pexels.com/photos/266246/pexels-photo-266246.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            title: 'Social Media',
            text: 'Posiciona tu marca en el mercado a través de estrategias de marketing digital.'

          },

          {
            src: 'https://images.pexels.com/photos/34177/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            title: 'Google Ads',
            text: 'Crea, ejecuta y mide campañas efectivas.'
          },
          {
            src: 'https://images.pexels.com/photos/1483938/pexels-photo-1483938.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            title: 'Posicionamiento SEO',
            text: 'Segmenta tu audiencia y domina herramientas que te permiten medir el alcance conversiones e impacto de tu empresa.'

          }
        ]
      }
    }
  }
</script>


<style scoped>

.h1, h1 {
  font-family: 'Lobster', cursive;
  text-align: center;
}
.title {
    padding-top: 183px;
    font-size: 20px!important;
    font-weight: 500;
    line-height: 1!important;
    letter-spacing: .02em!important;
}

p {
  font-family: 'Lobster', cursive;

}

.v-carousel {
    opacity: .8;
    width: 100%;
    position: relative;
    overflow: hidden;
    
}


</style>
