const pokemonInfo = document.getElementById("pokemonInfo")
const inputCharacterName = document.getElementById("characterName")
async function getPokemonInfo() {
    
    const characterName = inputCharacterName.value.toLowerCase()

    const response = await axios.get(`http://127.0.0.1:4000/?name=${characterName}&`)
    const {name,status,species,gender,origin:{name:originName},image}= await response.data.results[0]
    
    pokemonInfo.innerHTML = `
            <p> <span> Name:</span> ${name} </p>
            <p> <span>Status:</span> ${status}</p>
            <p> <span>Species:</span> ${species}</p>
            <p> <span>Gender:</span> ${gender}</p>
            <p><span>Origin:</span> ${originName}</p>
            <p> <span>Image:</span> ${image}</p>
    `
    
}
