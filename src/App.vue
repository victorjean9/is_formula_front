<template>
  <div id="app">
    <div id="app-particulas">
      <vue-particles color="#41B883"></vue-particles>
    </div>
    <HomePage />
    <div id="app-rodape">
      <p>Feito com <font-awesome-icon icon="heart" /> por Victor Jean, Mariana Mendes, Michael Bruno, Roberto de Oliveira, Andressa Oliveira, Desiree Araújo, Samara Almendane e Fernanda Oliveira</p>
    </div>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue'

export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>

<style>
@import './assets/styles/fontes.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app-particulas {
  position: fixed;
  z-index: -1 !important;
  width: 100%;
  height: 100vh;
}

#app-rodape {
  position: fixed;
  bottom: 0;
  width:100%;
  padding:15px;
}


</style>
