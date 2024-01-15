<script setup>
import { useFavoritosStore } from '@/store/favorito'
import { storeToRefs } from 'pinia';
import { RouterLink } from 'vue-router';

const useFavorito = useFavoritosStore()
const { favoritos } = storeToRefs(useFavorito)
const { remove } = useFavorito;
</script>

<template>
  <div>
    <h1 class="text-xl text-yellow-500 dark:text-yellow-400 mt-5" v-if="favoritos.length === 0">
      Sin Favoritos
    </h1>
    <section v-else class="mt-5">
      <ul>
        <li class="flex justify-center items-center p-3 gap-1 border rounded mb-3 border-yellow-300" :key="poke.id" v-for="poke in favoritos">
          <h1 class="text-xl text-yellow-500 dark:text-yellow-400">{{ poke.name }}</h1>
          <img :src="poke.sprites.front_shiny" alt="Poke Shiny">
          <button class="focus:outline-none text-gray-700 bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900" @click="remove(poke.id)">
            Eliminar
          </button>
          <RouterLink class="focus:outline-none text-gray-700 bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900" :to="`pokemons/${poke.name}`">
            Más información
          </RouterLink>
        </li>
      </ul>
    </section>
  </div>
</template>
