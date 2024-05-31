
/* const typeColor = {
    normal:'#A8A878' ,
    bug: '#A8B820',
    fire: '#F08030',
    water: '#6890F0',
    electric: '#F8D030',
    grass: ,
    ice: ,
    fighting: ,
    poison: ,
    ground: ,
    flying: ,
    psychic: ,
    rock: ,
    ghost: ,
    dragon: ,
    dark: ,
    steel: ,
    fairy: ,

} */


export function typesColor (pokemon) {
    const types = pokemon.types.map(tipo => tipo.type.name)
    const tipo1 = types[0]
    const tipo2 = types[1] || ''
    
    if (tipo1 || tipo2 == "bug") {
        
    }
}
export function pokeContainer(pokemon) {

    const types = pokemon.types.map(tipo => tipo.type.name)
    console.log(types)
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
