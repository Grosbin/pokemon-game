import pokemonApi from "@/api/pokemonApi";

const getPokemons = () => {
	const pokemonsArr = Array.from(Array(650));
	return pokemonsArr.map((_, index) => index + 1)
}

const getPokemonsOpcions = async () => {
	const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5)
	const pokemons = await getPokemonNames(mixedPokemons.splice(0, 4));

	return pokemons;
}

const getPokemonNames = async ([a, b, c, d] = []) => {
	// const resp = await pokemonApi.get(`/1`)
	// console.log(resp.data)

	const promiseArr = [
		pokemonApi.get(`/${a}`),
		pokemonApi.get(`/${b}`),
		pokemonApi.get(`/${c}`),
		pokemonApi.get(`/${d}`),
	]
	const [a1, b1, c1, d1] = await Promise.all(promiseArr)

	return [
		{ name: a1.data.name, id: a1.data.id },
		{ name: b1.data.name, id: b1.data.id },
		{ name: c1.data.name, id: c1.data.id },
		{ name: d1.data.name, id: d1.data.id },
	]

}

export default getPokemonsOpcions