const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".select")


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-valor").value
    const valorMoeda = document.querySelector(".moeda-valor") // valor em real
    const valorMoeda2 = document.querySelector(".moeda-valor2") // valor convertido

    const euroToday = 6.2
    const dolarToday = 5.2
    const libraToday = 7.63
    const bitcoinToday = 591.043

    // Verifica se o valor de entrada é um número válido
    if (isNaN(inputCurrencyValue)) {
        alert("Por favor, insira um valor válido.");
        return;
    }

    valorMoeda.innerHTML = new Intl.NumberFormat("pt-BR", { //MOEDA REAL, COLOCA ELA NO CAMPO DO REAL E ESTILIZADA
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)


    if (currencySelect.value == "dolar") { // SE NO SELECT ESTIVER SELECIONADO DOLAR, ENTRE AQUI
        valorMoeda2.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") { // SE NO SELECT ESTIVER SELECIONADO EURO, ENTRE AQUI
        valorMoeda2.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

      if (currencySelect.value == "libra") { // SE NO SELECT ESTIVER SELECIONADO LIBRA, ENTRE AQUI
        valorMoeda2.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    
      if (currencySelect.value == "bitcoin") { // SE NO SELECT ESTIVER SELECIONADO LIBRA, ENTRE AQUI
        valorMoeda2.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

        if (currencySelect.value == "bitcoin") { // SE NO SELECT ESTIVER SELECIONADO BITCOIN, ENTRE AQUI
        // Calcule o valor em Bitcoin (ajuste a lógica conforme necessário)
        let valorEmBitcoin = inputCurrencyValue / bitcoinToday; // Supondo que bitcoinToday seja o valor atual do Bitcoin em relação à moeda base

        // Exiba o valor em Bitcoin com duas casas decimais
        valorMoeda2.innerHTML = valorEmBitcoin.toFixed(8) + " BTC"; // Formata para 8 casas decimais
}
}

function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".img-usa")

    if(currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/usa.png"
    }

    if(currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

     if(currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }

     if(currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }
    convertValues()
}


currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)

