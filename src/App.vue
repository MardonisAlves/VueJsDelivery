<template>
  <div id="app">
    <div>
          <b-navbar type="dark" variant="success" fixed="top">
          <b-navbar-nav>
            <b-nav-item href="#" v-b-toggle.sidebar-no-header>Menu</b-nav-item>
            <b-nav-item href="/">Cardapio</b-nav-item>
            <b-nav-item-dropdown text="User" right>
              <b-dropdown-item href="#">login</b-dropdown-item>
              <b-dropdown-item href="#">exit</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-navbar-nav>
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

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}


</style>
