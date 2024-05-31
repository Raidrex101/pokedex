import { pokeContainer } from './mainContainer.js'

const getdata = async (id) => {
    try {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((response) => response.json())
            .then((data) => {
                pokeContainer(data)
                console.log(data)
                /* data[0].types[0].type.url */
            })
    } catch (error) {
        console.log(error);
    }
}

const pokedata = async (number) => {
    for (let i = 1; i <= number; i++)
        await getdata(i)
}

pokedata(151)





