<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const pokemons = ref([])

const getData = async () => {
    try {
        const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon')
        pokemons.value = data.results;
    } catch (error) {
        console.log(error)
    }
}

getData();
</script>

<template>
    <ol class="grid grid-cols-3 gap-4 m-3">
        <li 
        class="text-gray-500 dark:text-gray-400 m-2"
        v-for="pokemon in pokemons" :key="pokemon.name">
            <RouterLink :to="`/pokemons/${pokemon.name}`">{{ pokemon.name }}</RouterLink>
        </li>
    </ol>
</template>
