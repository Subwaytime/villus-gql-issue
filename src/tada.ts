import { graphql } from 'gql.tada';
import { useQuery } from 'villus';
import { ref } from 'vue';
import { defineStore } from 'pinia';

// Usually the queries are imported from other files, so not sure if that has an impact.
const GetPokemonQuery = graphql(`
    query GetPokemonQuery {
        pokemon_v2_pokemon(limit: 5) {
            id
            name
        }
    }
`);

export const useTadaStore = defineStore('tada', () => {
    const pokemon = ref();

    async function getPokemon() {
        try {
            const { data } = await useQuery({
                query: GetPokemonQuery
            });
            pokemon.value = data.value.pokemon_v2_pokemon;
            return;
        } catch (error) {
            console.error(error);
        }
    }

    return {
        pokemon,
        getPokemon
    }
});