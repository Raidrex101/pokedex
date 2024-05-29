const getdata = async (id) => {
    try {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((response) => response.json())
            .then((data) => {
                pokeContainer(data)
                
            })



    } catch (error) {
        console.log(error);
    }
}

const pokedata = async (number) => {
    for (let i = 1; i <= number; i++)
        await getdata(i)
}


function pokeContainer(pokemon) {
    const container = document.getElementById('container')
    const pokeCard = document.createElement('div')
    pokeCard.classList.add('card')
    pokeCard.innerHTML =`
        <img id="pokeSprite" src="${pokemon.sprites.front_default}" alt="Quien es ese pokemon?">
        <h2 id="pokeName">${pokemon.name}</h2>`

    container.appendChild(pokeCard)

}


pokedata(151)





