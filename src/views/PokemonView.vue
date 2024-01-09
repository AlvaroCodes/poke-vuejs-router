<script setup>
import { RouterLink } from 'vue-router';
import {useGetData}  from '@/composables/getData'

const {data, getData, loading} = useGetData()

getData('https://pokeapi.co/api/v2/pokemon');
</script>

<template>
    <h1 class="text-3xl text-yellow-500 dark:text-yellow-400">Pokemons Shiny</h1>
    <p class="text-xl text-yellow-500 dark:text-yellow-400" v-if="loading">Cargando... </p>
    <section
    class="flex justify-center items-center flex-col"
    v-if="data"
    >
 
    <ol 
    class="grid grid-cols-3 gap-4 m-3">
        <li 
        class="text-gray-500 dark:text-gray-400 m-2"
        v-for="pokemon in data.results" :key="pokemon.name">
            <RouterLink :to="`/pokemons/${pokemon.name}`">{{ pokemon.name }}</RouterLink>
        </li>
    </ol>

    <div class="flex gap-x-2 m-3">
        <button 
        :disabled="!data.previous"
        @click="getData(data.previous)"
        class="focus:outline-none text-gray-700 bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Previous</button>
        <button 
        @click="getData(data.next)"
        class="focus:outline-none text-gray-700 bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Next</button>
    </div>
    </section>
   
</template>
