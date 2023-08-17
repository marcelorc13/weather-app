const valorInserido = document.querySelector('#cidade')
const btnConverter = document.querySelector('#btn')

const temperaturaHtml = document.querySelector('#temperatura')
const humidadeHtml = document.querySelector('#humidade')
const velocidadeDoVentoHtml = document.querySelector('#velocidadeDoVento')
const iconeHtml = document.querySelector('#icone')

const conteudo = document.querySelector('#conteudo')

conteudo.classList.add('hidden')

btnConverter.addEventListener('click', () => {
    const valorRecebido = valorInserido.value
    carregarAPI()

    async function carregarAPI() {
        const apiKey = 'a5d9b97cd430470aa24185205231608'
        const api = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${valorRecebido}&aqi=no`)
        const apiConvertida = await api.json()

        const tipoDeTempo = await apiConvertida.current.condition.text
        const temperaturaGraus = await apiConvertida.current.temp_c
        const humidade = await apiConvertida.current.humidity
        const velocidadeDoVento = await apiConvertida.current.wind_kph

        console.log(apiConvertida)

        conteudo.classList.remove('hidden')

        console.log(tipoDeTempo)


        temperaturaHtml.innerHTML = `${temperaturaGraus}°C`
        humidadeHtml.innerHTML = `Humidade: ${humidade}% <i class="fa-solid fa-droplet">`
        velocidadeDoVentoHtml.innerHTML = `Vento: ${velocidadeDoVento}Km/h <i class="fa-solid fa-wind">`
    }

})

