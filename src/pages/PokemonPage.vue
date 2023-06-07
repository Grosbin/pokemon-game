<template>
  <h1 v-if="!pokemon.id">Espere por favor...</h1>
  <div v-else>
    <h1>Quien es este pokemon?</h1>
    <pokemon-picture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <pokemon-option :pokemons="pokemonsArr" @selection="checkAnswer" />

    <template v-if="showAnswer">
      <h2>{{ message }}</h2>
      <button @click="newGame">Jugar de nuevo</button>
    </template>
  </div>
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture.vue";
import PokemonOption from "@/components/PokemonOption.vue";
import getPokemonsOpcions from "@/helpers/getPokemonsOptions";

export default {
  components: { PokemonPicture, PokemonOption },
  data() {
    return {
      pokemonsArr: [],
      pokemon: {},
      showPokemon: false,
      showAnswer: false,
      message: "",
    };
  },

  methods: {
    async mixPokemonArray() {
      this.pokemonsArr = await getPokemonsOpcions();
      const rndInt = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonsArr[rndInt];
    },
    checkAnswer(id) {
      this.showPokemon = true;
      this.showAnswer = true;
      if (id === this.pokemon.id) {
        this.message = `Felicidades! El pokemon es ${this.pokemon.name}`;
      } else {
        this.message = `Incorrecto! El pokemon es ${this.pokemon.name}`;
      }
    },
    newGame() {
      this.showAnswer = false;
      this.showPokemon = false;
      this.mixPokemonArray();
    },
  },

  mounted() {
    this.mixPokemonArray();
  },
};

getPokemonsOpcions();
</script>

<style></style>
