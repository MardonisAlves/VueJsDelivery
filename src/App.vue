<template>
  <div id="app">
    <div>
        <b-navbar toggleable="lg"  fixed="top" >
          <!--SIDE-BAR-LEFT-->
           <b-navbar-brand href="#" v-b-toggle.sidebar-no-header>
                            <b-icon-house-fill variant="dark"  font-scale="3"></b-icon-house-fill>
          </b-navbar-brand>

           <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
           <b-collapse id="nav-collapse" is-nav>
             <b-navbar-nav>
              <b-nav-item href="/">Home</b-nav-item>
              <b-nav-item href="/contato">Contato</b-nav-item>
             </b-navbar-nav>

             <!-- Right aligned nav items -->
             <b-navbar-nav class="ml-auto">
               <b-nav-item right>
            <!--SIDE BAR LEFT-->
                 <b-nav-item href="#"><b-avatar variant="dark"></b-avatar></b-nav-item>
               </b-nav-item>
             </b-navbar-nav>
           </b-collapse>
         </b-navbar>


  <div>
    <!--CARDAPIO-->
    <Card></Card>
  </div>
  </div>

  <div>
    <!--SIDEBAR-->
    <SideBar></SideBar>
  </div>

    <router-view></router-view>
</div>
</template>


<script>
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Card from './components/Card'
import SideBar from './components/sidebar/sidebar'

export default {
  components: {
    Card,
    SideBar
  },
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
}

#body-color{
    background-color: white;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
.navbar-nav .nav-item a{
  color: white  !important;
}
.navbar {
  background-color: #C70039 !important;
}




</style>
