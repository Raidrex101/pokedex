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


export function typesColor(pokemon) {
    const types = pokemon.types.map(tipo => tipo.type.name)
    const tipo1 = types[0]
    const tipo2 = types[1] || ''

    const color1 = typeColor[tipo1]
    const color2 = tipo2 ? typeColor[tipo2] : ''
    return { color1, color2 }
}


export function pokeContainer(pokemon) {

    const types = pokemon.types.map(tipo => tipo.type.name)

    const tipo1 = types[0]
    const tipo2 = types[1]

    const { color1, color2 } = typesColor(pokemon)

    const container = document.getElementById('container')
    const pokeCard = document.createElement('div')
    pokeCard.classList.add('border', 'ms-3', 'my-3', 'shadow-xl')
    pokeCard.innerHTML = `
    <button id='${pokemon.id}'>
    <div class= "pokeCardHome2">
    <h2 class="text-center rounded-full mx-4 my-1 border-2" style ="background-color:silver" id="pokeName">${pokemon.name}</h2>
    <img id="pokeSprite" class="" src="${pokemon.sprites.front_default}" alt="Quien es ese pokemon?">
    <h1 class="text-center">#${pokemon.id}</h1>
    <div class="text-center" id="poketipos">
    <p class= "rounded-full mx-4 my-1 border-2" style ="background-color:${color1}">${tipo1}</p>
    ${tipo2 ? `<p id="tipo2" class="rounded-full mx-4 my-2 border-2" style="background-color:${color2}">${tipo2}</p>` : ''}
    </div>
    </button>
    `

    container.appendChild(pokeCard)

    const modal = document.querySelector("#modal")

    modal.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            event.preventDefault();
        }
    });
    let pokeId = 0
    pokeId = pokemon.id

    const pokeModal = document.getElementById(`${pokeId}`)

    pokeModal.addEventListener('click', () => {
        const pokeMensaje = document.createElement('div')
        pokeMensaje.classList.add(`${pokeId}`)
        pokeMensaje.classList.add(`pokeMensaje`)

        modal.appendChild(pokeMensaje)

        const miScript = document.createElement('script');
        miScript.classList.add("scriptModal")
        miScript.src = 'scripts/modal.js';
        miScript.defer = true;

        modal.appendChild(miScript)

        modal.showModal()
        pokeId = 0
    })

    
}

const closeModal = document.querySelector(".closeModal")

    closeModal.addEventListener("click", () => {
        const removePokeMensaje = document.querySelector(".pokeMensaje")
        removePokeMensaje.remove("")
        
        const scriptAEliminar = document.querySelector('.scriptModal');
        scriptAEliminar.remove();
        modal.close()
        window.location.reload();
        sessionStorage.clear()
        localStorage.clear()
    })