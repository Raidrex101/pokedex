const containerPrincipal = document.querySelector(".contenedor")
const infopokemon = document.querySelector(".infoPokemon")
const bloqueCentral = document.querySelector(".bloqueCentral")
const nextPoke = document.querySelector("#nextPoke")
const previousPoke = document.querySelector("#previousPoke")
const galeriapokemon = document.querySelector(".galeriaPokemon")
const containerPokemon = document.querySelector(".containerPokemon")

const pokeMensaje = document.querySelector(".pokeMensaje")
const pokeString = pokeMensaje.outerHTML

const parser = new DOMParser();
const doc = parser.parseFromString(pokeString, 'text/html');
const divElement = doc.querySelector('div');
const pokeId = divElement.classList[0]; 
let id = pokeId

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

const getdata = async (id) => {
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

        switch (colorType1) {
            case "normal":
                containerPrincipal.classList.add("isnormal")
                infopokemon.classList.add("isnormal")
                nextPoke.classList.add("isnormal")
                previousPoke.classList.add("isnormal")
                galeriapokemon.classList.add("isnormal")
                break;
            case "bug":
                containerPrincipal.classList.add("isbug")
                infopokemon.classList.add("isbug")
                nextPoke.classList.add("isbug")
                previousPoke.classList.add("isbug")
                galeriapokemon.classList.add("isbug")
                break;
            case "fire":
                containerPrincipal.classList.add("isfire")
                infopokemon.classList.add("isfire")
                nextPoke.classList.add("isfire")
                previousPoke.classList.add("isfire")
                galeriapokemon.classList.add("isfire")
                break;
            case "water":
                containerPrincipal.classList.add("iswater")
                infopokemon.classList.add("iswater")
                nextPoke.classList.add("iswater")
                previousPoke.classList.add("iswater")
                galeriapokemon.classList.add("iswater")
                break;
            case "electric":
                containerPrincipal.classList.add("iselectric")
                infopokemon.classList.add("iselectric")
                nextPoke.classList.add("iselectric")
                previousPoke.classList.add("iselectric")
                galeriapokemon.classList.add("iselectric")
                break;
            case "grass":
                containerPrincipal.classList.add("isgrass")
                infopokemon.classList.add("isgrass")
                nextPoke.classList.add("isgrass")
                previousPoke.classList.add("isgrass")
                galeriapokemon.classList.add("isgrass")
                break;
            case "ice":
                containerPrincipal.classList.add("isice")
                infopokemon.classList.add("isice")
                nextPoke.classList.add("isice")
                previousPoke.classList.add("isice")
                galeriapokemon.classList.add("isice")
                break;
            case "fighting":
                containerPrincipal.classList.add("isfighting")
                infopokemon.classList.add("isfighting")
                nextPoke.classList.add("isfighting")
                previousPoke.classList.add("isfighting")
                galeriapokemon.classList.add("isfighting")
                break;
            case "poison":
                containerPrincipal.classList.add("ispoison")
                infopokemon.classList.add("ispoison")
                nextPoke.classList.add("ispoison")
                previousPoke.classList.add("ispoison")
                galeriapokemon.classList.add("ispoison")
                break;
            case "ground":
                containerPrincipal.classList.add("isground")
                infopokemon.classList.add("isground")
                nextPoke.classList.add("isground")
                previousPoke.classList.add("isground")
                galeriapokemon.classList.add("isground")
                break;
            case "flying":
                containerPrincipal.classList.add("isflying")
                infopokemon.classList.add("isflying")
                nextPoke.classList.add("isflying")
                previousPoke.classList.add("isflying")
                galeriapokemon.classList.add("isflying")
                break;
            case "psychic":
                containerPrincipal.classList.add("ispsychic")
                infopokemon.classList.add("ispsychic")
                nextPoke.classList.add("ispsychic")
                previousPoke.classList.add("ispsychic")
                galeriapokemon.classList.add("ispsychic")
                break;
            case "rock":
                containerPrincipal.classList.add("isrock")
                infopokemon.classList.add("isrock")
                nextPoke.classList.add("isrock")
                previousPoke.classList.add("isrock")
                galeriapokemon.classList.add("isrock")
                break;
            case "ghost":
                containerPrincipal.classList.add("isghost")
                infopokemon.classList.add("isghost")
                nextPoke.classList.add("isghost")
                previousPoke.classList.add("isghost")
                galeriapokemon.classList.add("isghost")
                break;
            case "dragon":
                containerPrincipal.classList.add("isdragon")
                infopokemon.classList.add("isdragon")
                nextPoke.classList.add("isdragon")
                previousPoke.classList.add("isdragon")
                galeriapokemon.classList.add("isdragon")
                break;
            case "dark":
                containerPrincipal.classList.add("isdark")
                infopokemon.classList.add("isdark")
                nextPoke.classList.add("isdark")
                previousPoke.classList.add("isdark")
                galeriapokemon.classList.add("isdark")
                break;
            case "steel":
                containerPrincipal.classList.add("issteel")
                infopokemon.classList.add("issteel")
                nextPoke.classList.add("issteel")
                previousPoke.classList.add("issteel")
                galeriapokemon.classList.add("issteel")
                break;
            case "fairy":
                containerPrincipal.classList.add("isfairy")
                infopokemon.classList.add("isfairy")
                nextPoke.classList.add("isfairy")
                previousPoke.classList.add("isfairy")
                galeriapokemon.classList.add("isfairy")
                break;

            default:
                containerPrincipal.classList.add("isnormal")
                infopokemon.classList.add("isnormal")
                nextPoke.classList.add("isnormal")
                previousPoke.classList.add("isnormal")
                galeriapokemon.classList.add("isnormal")
                break;
        }

        const typeColor = {
            normal: '#A8A878',
            bug: '#A8B820',
            fire: '#F08030',
            water: '#6890F0',
            electric: '#F8D030',
            grass: '#78C850',
            ice: '#98D8D8',
            fighting: '#C03028',
            poison: '#A040A0',
            ground: '#E0C068',
            flying: '#A890F0',
            psychic: '#F85888',
            rock: '#B8A038',
            ghost: '#705898',
            dragon: '#7038F8',
            dark: '#705848',
            steel: '#B8B8D0',
            fairy: '#F0B6BC',
        }
        
        
        function typesColor(pokemon) {
            const types = pokemon.types.map(tipo => tipo.type.name)
            const tipo1 = types[0]
            const tipo2 = types[1] || ''
        
            const color1 = typeColor[tipo1]
            const color2 = tipo2 ? typeColor[tipo2] : ''
            return { color1, color2 }
        }

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

getdata(id)

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

                getdata(id)

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

                getdata(id)
                return data
            } catch (error) {
                console.log(error)
            }
        }

        getcolor(id)

    }
})

