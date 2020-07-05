<template>
  <div id="app">
    <div>
      <b-container>
      <b-navbar toggleable type="dark" variant="dark" fixed="top">
        <b-navbar-brand href="/">
          <div class="h2 mb-0">
            <b-icon icon="house"></b-icon>
          </div>
        </b-navbar-brand>

       <b-navbar-toggle target="navbar-toggle-collapse">
         <template v-slot:default="{ expanded }">
           <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
           <b-icon v-else icon="chevron-bar-down"></b-icon>
         </template>
       </b-navbar-toggle>

       <b-collapse id="navbar-toggle-collapse" is-nav>
         <b-navbar-nav class="ml-auto">
           <b-nav-item href="/users">List Users</b-nav-item>
           <b-nav-item href="/newuser">New User</b-nav-item>
           <b-nav-item href="#" disabled>Disabled</b-nav-item>
         </b-navbar-nav>
       </b-collapse>
     </b-navbar>
    </div>
  </b-container>
    <div>
      <Card></Card>
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
export default {
  components: {
    Card
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

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
</style>
