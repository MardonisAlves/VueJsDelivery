<template>
  <div>
  <b-container>
    <div v-if="errored">Não foi Possivel localizar a informação</div>

    <div v-if="loading">
        <b-col md="4" class="mb-3">
          <p class="text-left">
          <b-icon icon="three-dots" animation="cylon" font-scale="4"></b-icon>
          </p>
        </b-col>

    </div>

    <b-list-group>
      <b-row >
      <b-col sm="8" md="4" lg="4" v-for="pizza  in pizzas">
        <b-list-group-item>
          <b-img thumbnail fluid v-bind:src=" hosturl + pizza.urlimg" alt="Image 1" rounded="circle"></b-img>

          <span class="mr-auto">{{pizza.nome}}  
          <b-badge variant="danger">M{{pizza.valorM}}</b-badge>
          <b-badge variant="warning">G{{pizza.valorG}}</b-badge>
          <b-badge variant="success" v-b-toggle.sidebarPizza>Mais...</b-badge></span>
        </b-list-group-item>
      </b-col>
        </b-row>
  </b-list-group>
    </div>
  </b-container>
    </div>

</template>
<script>
import axios from 'axios'

export default {
  name: 'Card',
  data(){
    return {
      hosturl : 'https://infinite-springs-64835.herokuapp.com/img/uploads/cardapio/',
      pizzas : [],
      loading: true,
      errored: false,
      status : '',
      notification : '',
      showDismissibleAlert: false
    }
  },
  mounted(){
    axios.get('https://infinite-springs-64835.herokuapp.com/listcardapio')
    .then(response => {
      // aqui atribuimos a variavel users com o response.data
      this.pizzas = response.data;
      console.log(response);
      //alert(response);
    })
    .catch(error => {
      console.log(error)
        this.errored = true
    })
    .finally(() => this.loading = false)
  },
}
</script>
<style>
.list-group {
  border: 0px;
  margin-top: 100px;
  margin-bottom: 0px;
}
.list-group .list-group-item {
 border: 0px;
}
.list-group .list-group-item .badge{
  font-size: 10px;
  margin-left: 2px;
}
</style>
