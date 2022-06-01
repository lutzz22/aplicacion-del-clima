// Tu codigo JS va acá

const peticionClima = async() => {
    const ciudad = document.querySelector('#ciudad')
    const ciudad2 = ciudad.value 
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad2}&appid=399150bee6e3ef041d7c322ec14534a6`)
    const clima = await response.json()
    console.log(clima)
    document.querySelector('#texto-ciudad').innerText = clima.name
    // nombreCiudad.innerText = clima.name
}