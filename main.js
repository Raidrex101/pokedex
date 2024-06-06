const pokemonData = []
import { pokeContainer } from "./mainContainer.js"
import { typesColor } from "./mainContainer.js"
document.addEventListener('DOMContentLoaded', () => {
    pokedata(1)
    observeChanges()
})
let pokemonDataProxy

const getdata = async (id) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await response.json()
        pokemonData.push(data)
    } catch (error) {
        console.log(error)
    }
}


const pokedata = async (pagina) => {
    pokemonData.length = 0
    let start, end

    if (pagina === 1) {
        start = 1
        end = 50  
    }else if (pagina === 2) {
        start = 51
        end = 100
    }else if (pagina === 3) {
        start = 101
        end = 151
    }

    for (let i = start; i <= end; i++) {
        await getdata(i)
    }
    pokemonFetched()
}

const pokemonFetched = () => {
    const container = document.getElementById("container")
    container.innerHTML = ''
    pokemonData.forEach(pokemon => {
        pokeContainer(pokemon)
        typesColor(pokemon)
    });
}


export const paginas = document.querySelectorAll(".page")
paginas.forEach(button => {
    button.addEventListener('click', () => {
        const pagina = parseInt(button.innerText)
        console.log(pagina)
        pokedata(pagina)
    })
})



const searchButton = document.getElementById("searchButton")

searchButton.addEventListener('click' , () => {
    
    const searchInput = document.getElementById('search').value
    
    pokesearch(searchInput, pokemonData)
    
})

const pokesearch = (searchInput, pokemonData) => {
    if (searchInput.trim() === "") {
        pokedata(1)
    } else {
        const pokeFilter = pokemonData.filter(pokemon => {
            return pokemon.name.toLowerCase().includes(searchInput.toLowerCase());
        }).map(pokemon => {
            return { id: pokemon.id, name: pokemon.name, types: pokemon.types, sprites: pokemon.sprites }
        })
        
        pokemonData.length = 0
        pokeFilter.forEach(pokemon => {
            pokemonData.push(pokemon)
        })
        
        pokemonFetched()
        console.log(pokemonData)
    }
}


const observeChanges = () => {
    pokemonDataProxy = new Proxy(pokemonData, {
        set: function(target, key, value) {
            target[key] = value
            return true
        }
    });
    
};

