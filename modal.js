import { typesColor } from "./mainContainer.js"

const containerPokemon = document.querySelector(".containerPokemon")
const infopokemon = document.querySelector(".infoPokemon")
const galeriapokemon = document.querySelector(".galeriaPokemon")

let id = 1;

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

const getdata = async (id) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await response.json()
        console.log(data)

        /* Carta pokemon */

        pokecard.innerHTML = `
        <h1 id="namePoke">${data.name}</h1>
        <h2 id="namePoke">#${data.id}</h2>
            <div class="viewPoke">
                <img id="imagePoke" src="${data.sprites.front_default}">    
            </div>
            <div class="tipos">
                <p id="typePoke1" >Planta</p>
                <p id="typePoke2" >dasgasg</p>
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





    } catch (error) {
        console.log(error)
    }
}

getdata(id)

document.querySelector("#nextPoke").addEventListener("click", () => {
    if (id < 151) {
        pokecard.innerHTML = ``
        infopokemon.innerHTML = ``
        galeriapokemon.innerHTML = ``
        id++
        getdata(id)
    }


})
document.querySelector("#previousPoke").addEventListener("click", () => {
    if (id > 1) {
        id--
        pokecard.innerHTML = ``
        infopokemon.innerHTML = ``
        galeriapokemon.innerHTML = ``
        getdata(id)
    }
})

