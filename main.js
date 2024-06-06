import { pokeContainer, typesColor } from "./mainContainer.js"

let pokemonData = []
let originalPokemonData = []

document.addEventListener('DOMContentLoaded', () => {
    pokedata(151)
    observeChanges()
})

let pokemonDataProxy

const getdata = async (id) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await response.json()
        pokemonData.push(data)
        originalPokemonData.push(data)
    } catch (error) {
        console.log(error)
    }
}

const pokedata = async (number) => {
    for (let i = 1; i <= number; i++)
        await getdata(i)
    pokemonFetched()
}
const pokemonFetched = () => {
    const container = document.getElementById("container")
    container.innerHTML = ''
    pokemonData.forEach(pokemon => {
        pokeContainer(pokemon)
        typesColor(pokemon)
    })
}

/* export const paginas = document.querySelectorAll(".page")
paginas.forEach(button => {
    button.addEventListener('click', () => {
        const pagina = parseInt(button.innerText)
        
        pokedata(pagina)
    })
}) */

const searchButton = document.getElementById("searchButton")

searchButton.addEventListener('click', () => {
    const searchInput = document.getElementById('search').value;
    pokesearch(searchInput)
    document.getElementById('search').value = ''
})

const pokesearch = (searchInput) => {
    if (searchInput.trim() === "") {

        pokemonData.length = 0
        originalPokemonData.forEach(pokemon => {
            pokemonData.push(pokemon)
        })
    } else {
        const pokeFilter = originalPokemonData.filter(pokemon => {
            return pokemon.name.toLowerCase().includes(searchInput.toLowerCase())
        }).map(pokemon => {
            return { id: pokemon.id, name: pokemon.name, types: pokemon.types, sprites: pokemon.sprites }
        })

        pokemonData.length = 0
        pokeFilter.forEach(pokemon => {
            pokemonData.push(pokemon)
        })
    }
    pokemonFetched()
}

const observeChanges = () => {
    pokemonDataProxy = new Proxy(pokemonData, {
        set: function (target, key, value) {
            target[key] = value
            pokemonFetched()
            return true
        }
    })

}
