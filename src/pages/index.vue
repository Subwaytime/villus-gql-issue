<template>
    <pre> {{ pokemon }} </pre>
</template>

<script setup lang="ts">
import { useClient } from 'villus';
import { useTadaStore } from '../tada';
import { storeToRefs } from 'pinia';

useClient({
    url: 'https://beta.pokeapi.co/graphql/v1beta'
});

const tadaStore = useTadaStore();
const { getPokemon } = tadaStore;
const { pokemon } = storeToRefs(tadaStore);

await getPokemon();
</script>