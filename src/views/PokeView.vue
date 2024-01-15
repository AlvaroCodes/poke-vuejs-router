
<script setup>
import { useRoute, useRouter } from 'vue-router';
import {useGetData}  from '@/composables/getData'
import { useFavoritosStore } from '@/store/favorito'

const route = useRoute()
const router = useRouter()

const useFavorito = useFavoritosStore()
const { add, findPoke } = useFavorito;

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

        <button
    class="focus:outline-none text-gray-700 bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
    @click="back">Volver</button>
    
    <button
    class="focus:outline-none text-gray-700 bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
    :disabled="findPoke(data.name)"
    @click="add(data)"
    >Agregar Favorito</button>
    </section>
    <h1 
    class="text-3xl text-yellow-500 dark:text-yellow-400 m-10"
    v-else-if="loading">Loading...</h1>
    <h1 
    class="text-3xl text-yellow-500 dark:text-yellow-400 m-10"
    v-else>No existe Pokemon</h1>
 

    
</template>