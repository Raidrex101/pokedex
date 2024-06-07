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

/* function openModal (){

}
 */
document.querySelector("#openModal").addEventListener("click", () => {

    const modal = document.querySelector("#modal")
    modal.showModal()

    const containerPrincipal = document.querySelector(".contenedor")
    const infopokemon = document.querySelector(".infoPokemon")
    const nextPoke = document.querySelector("#nextPoke")
    const previousPoke = document.querySelector("#previousPoke")
    const galeriapokemon = document.querySelector(".galeriaPokemon")
    const containerPokemon = document.querySelector(".containerPokemon")

    const pokecard = document.createElement("div")
    pokecard.classList.add("pokeCard")

    const pokestats = document.createElement("div")
    pokestats.classList.add("stats")

    const abilities = document.createElement("div")
    abilities.classList.add("abilities")

    const moves = document.createElement("div")
    moves.classList.add("moves")

    const onepoke = document.createElement("div")
    onepoke.classList.add("onepoke")

    const twopoke = document.createElement("div")
    twopoke.classList.add("twopoke")

    const treepoke = document.createElement("div")
    treepoke.classList.add("treepoke")

    let pokemon = []

    let id = 1

    const getpokedata = async (id) => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            const data = await response.json()
            pokemon = data

            let name = ""
            name = data.name

            const tipos = data.types.map(tipo => tipo.type.name)
            let colorType1 = ""
            let colorType2 = ""

            colorType1 = tipos[0]
            colorType2 = tipos[1] || ""

            containerPrincipal.classList.add(`is${data.types[0].type.name}`)
            infopokemon.classList.add(`is${data.types[0].type.name}`)
            nextPoke.classList.add(`is${data.types[0].type.name}`)
            previousPoke.classList.add(`is${data.types[0].type.name}`)
            galeriapokemon.classList.add(`is${data.types[0].type.name}`)


            const { color1, color2 } = typesColor(pokemon)


            /* Carta pokemon */


            pokecard.innerHTML = `
        <h1 id="namePoke">${name.toLocaleUpperCase()}</h1>
        <h2 id="namePoke">#${data.id}</h2>
            <div class="viewPoke">
                <img id="imagePoke" src="${data.sprites.front_default}">    
            </div>
            <div class="tipos">
                <p id="typePoke1" class="rounded-full mx-4 my-2 border-2" style="background-color:${color1}">${colorType1.toUpperCase()}</p>
                ${colorType2 ? `<p id="typePoke2" class="rounded-full mx-4 my-2 border-2" style="background-color:${color2}">${colorType2.toUpperCase()}</p>` : ""}
            </div> 
        `
            containerPokemon.appendChild(pokecard)

            /* Informacion Pokemon */

            pokestats.innerHTML = `
        <p>Stats</p>
        <p id="HP" class="atributos">HP: ${data.stats[0].base_stat}</p>
        <p id="Attack" class="atributos">Attack: ${data.stats[1].base_stat}</p>
        <p id="Defence" class="atributos">Defence: ${data.stats[2].base_stat}</p>
        <p id="Speed:" class="atributos">Speed: ${data.stats[5].base_stat}</p>`

            infopokemon.appendChild(pokestats)

            abilities.innerHTML = `
        <p>Abilities</p>
        <p>Ability 1: ${data.abilities[0].ability.name}</p>
        <p>Ability 2: ${data.abilities[1].ability.name}</p>`

            infopokemon.appendChild(abilities)

            moves.innerHTML = `
        <p>Moves</p>
        <p>${data.moves[0].move.name}</p>
        <p>${data.moves[1].move.name}</p>
        <p>${data.moves[2].move.name}</p>
        <p>${data.moves[3].move.name}</p>
        <p>${data.moves[4].move.name}</p>
        `
            infopokemon.appendChild(moves)

            /* Galeria Pokemon */

            onepoke.innerHTML = `
        <img id="imagePoke" src="${data.sprites.back_default}">
        `
            galeriapokemon.appendChild(onepoke)


            twopoke.innerHTML = `
        <img id="imagePoke" src="${data.sprites.front_shiny}">
        `
            galeriapokemon.appendChild(twopoke)

            treepoke.innerHTML = `
        <img id="imagePoke" src="${data.sprites.back_shiny}">
        `
            galeriapokemon.appendChild(treepoke)

            return;

        } catch (error) {
            console.log(error)
        }

    }

    getpokedata(id)

    nextPoke.addEventListener("click", () => {
        if (id < 151) {
            id++
            const getcolor = async (id) => {
                try {

                    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id - 1}`)
                    const data = await response.json()

                    const colorType = data.types[0].type.name
                    const removerType = `is${colorType}`

                    containerPrincipal.classList.remove(removerType)
                    infopokemon.classList.remove(removerType)
                    nextPoke.classList.remove(removerType)
                    previousPoke.classList.remove(removerType)
                    galeriapokemon.classList.remove(removerType)

                    pokecard.innerHTML = ``
                    infopokemon.innerHTML = ``
                    galeriapokemon.innerHTML = ``

                    getpokedata(id)

                } catch (error) {
                    console.log(error)
                }
            }

            getcolor(id)

        }
    })

    previousPoke.addEventListener("click", () => {

        if (id > 1) {
            id--
            const getcolor = async (id) => {
                try {
                    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id + 1}`)
                    const data = await response.json()


                    const colorType = data.types[0].type.name
                    const removerType = `is${colorType}`

                    containerPrincipal.classList.remove(removerType)
                    infopokemon.classList.remove(removerType)
                    nextPoke.classList.remove(removerType)
                    previousPoke.classList.remove(removerType)
                    galeriapokemon.classList.remove(removerType)

                    pokecard.innerHTML = ``
                    infopokemon.innerHTML = ``
                    galeriapokemon.innerHTML = ``

                    getpokedata(id)
                    return data
                } catch (error) {
                    console.log(error)
                }
            }

            getcolor(id)

        }
    })
})