<template>
  <div id="app-content" class="container">
    <h1 id="logo-titulo">isFormula</h1>
    <h6 id="logo-subtitulo">Verifica se uma sequência de caracteres é uma<br/>fórmula da Lógica Proposicional.</h6>
    <div class="row no-gutters mt-3 align-items-center">
      <div class="col">
        <input id="input-para-formula" class="form-control border-secondary rounded-pill pr-5" type="search" placeholder="Digite aqui uma cadeia de caracteres.">
      </div>
      <div class="col-auto">
          <button class="btn btn-outline-light text-dark border-0 rounded-pill ml-n5" type="button" v-on:click="enviaRequisicao" v-b-modal.result-modal>
              <font-awesome-icon icon="arrow-right" />
          </button>
      </div>
    </div>
    <p id="instrucoes">
      Máximo de 10 símbolos proposicionais.<br/> 
      Símbolos proposicionais aceitos: P, Q, R, S, P1, Q1, R1, S1, ... P99, Q99, R99, S99.<br/> 
      Conectivos: v, ^, ->, &lt;-&gt;, ~.<br/> 
      Parênteses são permitidos.
    </p>


    <!-- Janela Resultado -->
    <b-modal 
      id="result-modal" 
      title="Resultado"
      v-bind:ok-only="true"
      v-bind:centered="true"
      ok-variant="green">
      <img id="img-resultado"/>
      <p id="p-resultado"></p>
      <span id="erro-resultado"></span>
    </b-modal>


  </div>
</template>

<script>
import axios from "axios";
import imagem404 from "../assets/img/404.png";
import imagemSucesso from "../assets/img/returnTrue.png";
import imagemErrado from "../assets/img/returnFalse.png";


export default {
  name: 'HomePage',
  methods: {
    enviaRequisicao: function() {

      var formulaDigitada = document.getElementById("input-para-formula").value;

      axios.request({
        method: 'POST',
        url: "http://localhost:3000/logica/v1/validaFormula",
        data: {
          "formula": formulaDigitada,
        }
      })
      .then(response => {

        if(formulaDigitada == "") {
          document.getElementById("img-resultado").src = imagemErrado;
          document.getElementById("result-modal___BV_modal_title_").innerText = "Fórmula não digitada!";
          document.getElementById("p-resultado").innerHTML = "Você não digitou fórmula alguma!";
        } else {
          var resposta = response.data;

          if (resposta.resultado == true) {
            document.getElementById("img-resultado").src = imagemSucesso;
            document.getElementById("result-modal___BV_modal_title_").innerText = "Sucesso!";
            document.getElementById("p-resultado").innerText = resposta.formula + " é uma formula da lógica proposicional";
          } else {
            document.getElementById("img-resultado").src = imagemErrado;
            document.getElementById("result-modal___BV_modal_title_").innerText = "Ops!";
            document.getElementById("p-resultado").innerHTML = resposta.formula + " <b>não</b> é uma formula da lógica proposicional";
            document.getElementById("erro-resultado").innerHTML = "<b>Erro encontrado</b>: " + resposta.error;
          }
        }

      })
      .catch(erro => {
          if(erro.response.status == 404){
            document.getElementById("img-resultado").src = imagem404;
            document.getElementById("result-modal___BV_modal_title_").innerText = "404";
            document.getElementById("p-resultado").innerText = "404 - Backend não encontrado";
          }
      })
      
    }
  }
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

#instrucoes {
  text-align: left;
  margin: 5px 10px;
}

#img-resultado {
  width: 100%;
}

#p-resultado {
  color: #2c3e50;
}

#erro-resultado {
  color: #b22222;
}

.btn.btn-green {/* nao ta funcionando n sei pq */
  background-color: #2c3e50 !important;
  color: white !important;
}

@media only screen
and (max-width:770px) { 
  #app-content {
    padding: 150px 10px 0px 10px;
  }
}

@media only screen
and (min-width:771px) {
  #app-content {
    position: absolute;
    height: 200px;
    width: 700px;
    margin: -150px 0 0 -350px;
    top: 50%;
    left: 50%;
  }
}

</style>
