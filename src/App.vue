<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue';
</script>

<template>
  <header class="dark:bg-gray-800 flex justify-center items-center flex-col p-2">
    <section class="flex justify-center items-center">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="50" height="50" />
      <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="logo pokeApi" width="90" height="50">
    </section>
  
      <nav class="flex gap-x-3 pt-2 text-gray-500 dark:text-gray-400">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/pokemons">Pokemons</RouterLink>
      </nav>

  </header>

  <main class="flex justify-center items-center flex-col">
    <RouterView />
  </main>
 

  <Footer/>
</template>

