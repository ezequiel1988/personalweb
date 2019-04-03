<template>
<div id="barra">
  


<section>
  <nav class="navbar navbar-light bg-light">
  <a class="navbar-brand">ECsoftware</a>
</nav>

</section>


<section id="hero">
  <div class="h-txt text-light">
  <div data-aos="zoom-up"
    data-aos-duration="2000" class="starter-template" ref="titulo">
    <h1><span class="blanco-negro">Diseños web exclusivos</span></h1>

    <div class="corazon">
    <p>Hacemos de tus ideas una realidad</p>
    </div>
  </div>


  </div>

</section>

</div>
</template>



<script>
export default { 
  
} 
</script>


<style scoped>
.starter-template {
  color: white;
  padding: 3rem 1.5rem;
  text-align: center;
}

#hero {
  background: url(../assets/A.jpg);
  background-size: cover;

}

.h-txt {
  padding: 20% 2%;

}

.bg-light {
  background-color:transparent !important;
  }
  
  .navbar {
    position: absolute;
  }
  .navbar-light .navbar-brand {
    color: #f8f9fa;
}
.navbar-brand {
  font-family: 'Lobster', cursive;
  font-size: 35px;
}
.h1, h1 {
    font-size: 44px;
    font-family: 'Lobster', cursive;
}
@keyframes latidos {
    from { transform: none; }
    50% { transform: scale(1.4); }
    to { transform: none; }
}
.corazon {
	display: inline-block;
	text-shadow: 0 0 10px #222,1px 1px  0 #450505;
	animation: latidos 2s infinite;
	transform-origin: center;
}

body { text-align: center;
  background: #333; height: 230px;
}


</style>
