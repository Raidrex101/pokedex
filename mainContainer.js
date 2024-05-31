export function pokeContainer(pokemon) {

    const types = pokemon.types.map(tipo => tipo.type.name)
    const tipo1 = types[0]
    const tipo2 = types[1] || ''

    /* console.log(tipo1, tipo2); */
    const container = document.getElementById('container')
    const pokeCard = document.createElement('div')
    pokeCard.classList.add('border', 'ms-3', 'my-3', 'shadow-xl')
    pokeCard.innerHTML = `
        <img id="pokeSprite" src="${pokemon.sprites.front_default}" alt="Quien es ese pokemon?">
        <h1 class="text-center">#${pokemon.id}</h1>
        <h2 class="text-center" id="pokeName">${pokemon.name}</h2>
        <div class="text-center" id="poketipos">
        <p>${tipo1}</p>
        <p>${tipo2}</p>
        </div>
        
        `

    container.appendChild(pokeCard)

}
