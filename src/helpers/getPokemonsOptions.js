const getPokemons = () => {
	const pokemonsArr = Array.from(Array(650));
	return pokemonsArr.map((_, index) => index + 1)
}


const getPokemonsOpcions = () => {
	const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5)
	getPokemonNames(mixedPokemons.splice(0, 4));
}


const getPokemonNames = ([a, b, c, d] = []) => {

}


export default getPokemonsOpcions