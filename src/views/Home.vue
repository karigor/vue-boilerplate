<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import {
  loadComponent
} from '../helpers/importer'

export default {
  name: 'home',
  components: {
    HelloWorld: loadComponent('HelloWorld')
  }
}
</script>
