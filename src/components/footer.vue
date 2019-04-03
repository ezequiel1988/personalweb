<template>
  <v-footer
    dark
    height="auto"
  >
    <v-card
      class="flex"
      flat
      tile

    >
      <v-card-title class="blue-grey darken-4 justify-center">

            <v-icon>fab fa-whatsapp</v-icon>


        <strong class="subheading">(+54) 11-7036-8212</strong>
        <v-spacer></v-spacer>



        <v-btn flat href="https://www.facebook.com/ezekiel.olivier" dark depressed fab class="mx-3">
          <v-icon size="24px">fab fa-facebook</v-icon>
        </v-btn>


         <v-btn flat href="https://www.linkedin.com/in/ezequiel-olivera-061b88173/" depressed fab class="mx-3">
          <v-icon size="24px">fab fa-linkedin</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-actions class="blue-grey darken-4 justify-center">
        &copy;2019 — <strong>ECsoft</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>


<script>
  export default {
    data: () => ({
      icons: [
        'fab fa-facebook',
        'fab fa-linkedin',
      ]
    })
  }
</script>





<style scoped>
.blue-grey.darken-4 {
    background-color: black!important;
    border-color: #263238!important;
}
.subheading {
    font-size: 16px!important;
    font-weight: 400;
    padding-left: 25px;
}
</style>
