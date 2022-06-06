// Tu codigo JS va acá

const peticionClima = async() => {
   try {
        const myKey = '399150bee6e3ef041d7c322ec14534a6'
        const ciudad = document.querySelector('#ciudad')
        let ciudad2 = ciudad.value 
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad2}&appid=${myKey}&units=metric&lang=es`)
        const clima = await response.json()
        console.log(clima)
        document.querySelector('#texto-ciudad').innerText = clima.name
        document.querySelector('#temperatura').textContent = (`${clima.main.temp}ºC`)
        document.querySelector('#pronostico').textContent = clima.weather[0].description
        document.querySelector('#humedad').textContent = (`${clima.main.humidity}%`)
        document.querySelector('#viento').textContent = (`${clima.wind.speed} km/h`)
        const icono = document.querySelector('#icono')
        icono.setAttribute('src', `http://openweathermap.org/img/w/${clima.weather[0].icon}.png`)
    } catch(error){
        alert('No pudimos identificar la ciudad')
    } finally {
        ciudad.value = ''
    } 
}

