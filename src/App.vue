<template>
<div class="h-screen flex items-center justify-center">
  <div class="text-center">
    <img alt="Vue logo" src="./assets/logo.png" class="mx-auto"/>
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite + Tailwind + Jest + Cypress" />
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  }
})
</script>


