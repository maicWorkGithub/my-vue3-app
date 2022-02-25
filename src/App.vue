<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import { Transmission } from './someClass';
import {ref} from 'vue'

const instance = ref<Transmission | null>(null)

instance.value = new Transmission({url: '', password: '', username: '', platformType: 'web'})

</script>

<template>
  <HelloWorld :instance="instance" />
</template>

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
