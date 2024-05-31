export const pokemonData = []
import { pokeContainer } from "./mainContainer.js"
import { typesColor } from "./mainContainer.js"


const getdata = async (id) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await response.json()
        pokemonData.push(data)
        
    } catch (error) {
        console.log(error);
    }
}

const pokedata = async (number) => {
    for (let i = 1; i <= number; i++) {

        await getdata(i)
    }
    pokemonFetched()
}

const pokemonFetched = () => {
    pokemonData.forEach(pokemon => {
        pokeContainer(pokemon)
        typesColor(pokemon)
    });
}


pokedata(50)

console.log(pokemonData)



