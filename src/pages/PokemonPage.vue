<template>
  <h1>Quien es este pokemon?</h1>
  <pokemon-picture :pokemonId="4" :showPokemon="true" />
  <pokemon-option />
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture.vue";
import PokemonOption from "@/components/PokemonOption.vue";
export default {
  components: { PokemonPicture, PokemonOption },
};
</script>

<style></style>
