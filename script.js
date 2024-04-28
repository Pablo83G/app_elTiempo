//APIKEY generada desede la web https://openweathermap.org/
let api_key = 'cc9062f7e5952f9594ad83e2237e1eed'
let urlBase = 'https://api.openweathermap.org/data/2.5/weather'

let difKelvin = 273.15


//Agregamos un escuchador de eventos (addEventListener) a botonBusqueda
//Cuando hacemos click lo que hemos escrito en el input(ciudadEntrada)
//Se guarda en la variable 'ciudad'
document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value
    //si escribimos en 'ciudad' entonces le pasamos los datos del clima
    if (ciudad) {
        fetchDatosClima(ciudad)
    }//(else)Si no apretamos el botón no pasa nada
})

function fetchDatosClima(ciudad) {
    //La Q ('?q=') es de query
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
        .then(response => response.json())
        .then(response => mostrarDatosClima(response))
}

function mostrarDatosClima(response) {
    //console.log(response)
    const divDatosClima = document.getElementById('datosClima')
    //ponemos vacío datosClima
    divDatosClima.innerHTML = ''
    //cogemos los datos en el resultado de la consola:
    const ciudadNombre = response.name
    const paisNombre = response.sys.country
    const temperatura = response.main.temp
    const humedad = response.main.humidity
    const descripcion = response.weather[0].description
    const icono = response.weather[0].icon

    //VAMOS A CREAR LOS ELEMENTOS PARA QUE SE VEA LA INFO DE LAS VARIABLES
    //ciudadNombre
    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`

    //temperaturaInfo
    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `Temperatura: ${Math.floor(temperatura - difKelvin)}ºC`

    //humedadInfo
    const humedadInfo = document.createElement('p')
    humedadInfo.textContent = `Humedad: ${humedad}%`

    const iconoInfo = document.createElement('img')
    iconoInfo.src = `https://openweathermap.org/img/wn/${icono}@2x.png`

    //descripcionInfo
    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = `La descripción meteorológica es: ${descripcion}`

    //Ahora tenemos que meter la info en las etiquetas HTML
    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(humedadInfo)
    divDatosClima.appendChild(iconoInfo)
    divDatosClima.appendChild(descripcionInfo)


}



