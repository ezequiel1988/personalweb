<template>
  <v-app>
      <HelloWorld/>
      <LineaTiempo/>
      <Par/>
      <SobreMi/>
      <Servicios/>
      <Car/>
      <Fo/>
    
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import SobreMi from './components/SobreMi'
import Fo from './components/footer'
import Par from './components/parallax'
import Car from './components/carrusel'
import LineaTiempo from './components/timeline'
import Servicios from './components/servicios'

export default {
  name: 'App',
  components: {
    HelloWorld,
    SobreMi,
      Fo,
      Par,
      Car,
      LineaTiempo,
      Servicios,
  },
 
}
</script>
