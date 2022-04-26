<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <CreateComponent/>
  <GetComponent/>
  <UpdateComponent/>
  <DeleteComponent/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CreateComponent from './components/CreateComponent'
import GetComponent from './components/GetComponent'
import UpdateComponent from './components/UpdateComponent'
import DeleteComponent from './components/DeleteComponent'

export default {
  name: 'App',
  components: {
    HelloWorld,
    CreateComponent,
    GetComponent,
    UpdateComponent,
    DeleteComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
