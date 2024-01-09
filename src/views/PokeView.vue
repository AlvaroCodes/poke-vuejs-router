
<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const pokeData = ref()
const route = useRoute()
const router = useRouter()

const back = () => {
    router.push('/pokemons')
}

const getData = async () => {
    try {
        const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
        pokeData.value = data;
    } catch (error) {
        console.log(error)
    }
  
}

getData()
</script>

<template>
    <h1 class="text-3xl text-yellow-500 dark:text-yellow-400">Pokemon Shiny: {{$route.params.name}}</h1>
    <img :src="pokeData?.sprites.front_shiny" alt="Poke Shiny">
    <button
    class="text-gray-500 dark:text-gray-400"
    @click="back">Volver</button>
</template>