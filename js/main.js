const valorInserido = document.querySelector('#cidade')
const btnConverter = document.querySelector('#btn')

const temperaturaHtml = document.querySelector('#temperatura')
const humidadeHtml = document.querySelector('#humidade')
const velocidadeDoVentoHtml = document.querySelector('#velocidadeDoVento')

const conteudo = document.querySelector('#conteudo')

conteudo.classList.add('hidden')

btnConverter.addEventListener('click', () => {
    const valorRecebido = valorInserido.value
    carregarAPI()

    async function carregarAPI() {
        const apiKey = 'a5d9b97cd430470aa24185205231608 '
        const api = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${valorRecebido}&aqi=no`)
        const apiConvertida = await api.json()

        const horarioLocal = await apiConvertida.location.localtime
        const horarioQueFoiAtualizado = await apiConvertida.current.last_updated
        const temperaturaGraus = await apiConvertida.current.temp_c
        const humidade = await apiConvertida.current.humidity
        const velocidadeDoVento = await apiConvertida.current.wind_kph

        console.log(apiConvertida)

        conteudo.classList.remove('hidden')


        temperaturaHtml.innerHTML = `${temperaturaGraus}`
        humidadeHtml.innerHTML = `Humidade: ${humidade}%`
        velocidadeDoVentoHtml.innerHTML = `Vento: ${velocidadeDoVento}Km/h`
    }

})

