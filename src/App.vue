<template>
  <div id="app">
    <div id="app-particulas">
      <vue-particles color="#41B883"></vue-particles>
    </div>
    <div id="app-content" class="container">
      <h1 id="logo-titulo">isFormula</h1>
      <h6 id="logo-subtitulo">Verifica se uma sequência de caracteres é uma<br/>fórmula da Lógica Proposicional.</h6>
      <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
      <div class="row no-gutters mt-3 align-items-center">
        <!-- <input class="form-control border-secondary rounded-pill pr-5" type="search" placeholder="Digite aqui uma cadeia de caracteres." id="example-search-input2">
        <button id="btn-go">-></button> -->
        <div class="col">
          <input class="form-control border-secondary rounded-pill pr-5" type="search" placeholder="Digite aqui uma cadeia de caracteres." id="example-search-input2">
        </div>
        <div class="col-auto">
            <button class="btn btn-outline-light text-dark border-0 rounded-pill ml-n5" type="button">
                <font-awesome-icon icon="arrow-right" />
            </button>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style>
@import './assets/styles/fontes.css';

#logo-titulo {
  font-family: VeganStyle;
  font-size: 60px;
}

#logo-subtitulo {
  font-weight: bold;
}

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

#app-content {
  padding: 300px;
}

#btn-go {
  background-color: blue;
  border-radius: 50%;
}

</style>
