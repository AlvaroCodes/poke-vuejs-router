
<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {useGetData}  from '@/composables/getData'

const pokeData = ref()
const route = useRoute()
const router = useRouter()

const back = () => {
    router.push('/pokemons')
}

const {data, getData, loading} = useGetData()

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
</script>

<template>
    <section 
    class="flex justify-center items-center flex-col"
    v-if="data">
        <h1 class="text-3xl text-yellow-500 dark:text-yellow-400">Pokemon Shiny: {{$route.params.name}}</h1>
        <img :src="data?.sprites.front_shiny" alt="Poke Shiny">
    </section>
    <h1 
    class="text-3xl text-yellow-500 dark:text-yellow-400 m-10"
    v-else-if="loading">Loading...</h1>
    <h1 
    class="text-3xl text-yellow-500 dark:text-yellow-400 m-10"
    v-else>No existe Pokemon</h1>
    <button
    class="text-gray-500 dark:text-gray-400"
    @click="back">Volver</button>
</template>