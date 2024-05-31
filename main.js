import { pokeContainer } from './mainContainer.js'
import { typesColor } from './mainContainer.js'

const getdata = async (id) => {
    try {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((response) => response.json())
            .then((data) => {
                pokeContainer(data)
                typesColor(data)
                console.log(data)
                
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





