<template>
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
    <p id="instrucoes">
      Carcteres especiais permitidos: '(', ')', '-&gt;', '&lt;-&gt;'<br/> 
      Letras permitidas: P, Q, R, S. <br/>
      Caso precise de mais variaveis, enumere! Ex: P1, Q1, R1, S1, P2, ...
    </p>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#logo-titulo {
  font-family: VeganStyle;
  font-size: 60px;
}

#logo-subtitulo {
  font-weight: bold;
}

#app-content {
  padding: 300px;
}

#instrucoes {
  text-align: left;
  margin: 5px 10px;
}
</style>
