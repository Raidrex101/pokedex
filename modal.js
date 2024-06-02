import { pokeContainer } from "./mainContainer.js"
import { typesColor } from "./mainContainer.js"

const containerPokemon = document.querySelector(".containerPokemon")
const stats = document.querySelector("#stats")

let id = 1;

const pokecard = document.createElement("div")
pokecard.classList.add("pokeCard")

const pokestats = document.createElement("div")
pokestats.classList.add("stats")

const getdata = async (id) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await response.json()
        console.log(data)

        pokecard.innerHTML = `
        <h1 id="namePoke">${data.name}</h1>
        <h2 id="namePoke">#${data.id}</h2>
            <div class="viewPoke">
                <img id="imagePoke" src="${data.sprites.front_default}">    
            </div>
            <div class="tipos">
                <p id="typePoke1">Planta</p>
                <p id="typePoke2">dasgasg</p>
            </div> 
        `
        containerPokemon.appendChild(pokecard)

        pokestats.innerHTML = `<p id="HP" class="atributos">HP: ${data.stats[0].base_stat}</p>
        <p id="Attack" class="atributos">Attack: ${data.stats[1].base_stat}</p>
        <p id="Defence" class="atributos">Defence: ${data.stats[2].base_stat}</p>
        <p id="Speed:" class="atributos">Speed: ${data.stats[5].base_stat}</p>`

        stats.appendChild(pokestats)
    } catch (error) {
        console.log(error)
    }
}

getdata(id)

document.querySelector("#nextPoke").addEventListener("click", () => {
    if (id < 151) {
        pokecard.innerHTML = ``
        pokestats.innerHTML = ``
        id++
        getdata(id)
    }


})
document.querySelector("#previousPoke").addEventListener("click", () => {
    if (id > 1) {
        id--
        pokecard.innerHTML = ``
        pokestats.innerHTML = ``
        getdata(id)
    }
})