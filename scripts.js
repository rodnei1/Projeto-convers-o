const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelectTop = document.querySelector(".currency-select-top")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const dolarToday = 5.2
    const euroToday = 6.19
    const libraToday = 6.89

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)

}

if (currencySelect.value == "real") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}

if(currencySelect.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue / dolarToday)
}

if(currencySelect.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency:"EUR"
    }).format(inputCurrencyValue / euroToday)
}

if(currencySelect.value == "libra") {
    currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "GBP"
    }).format(inputCurrencyValue / libraToday)
}

if (currencySelectTop.value == "dolar-to" && currencySelect.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue)
}

if(currencySelectTop.value == "dolar-to" && currencySelect.value == "real") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue / dolarToday )
}

if(currencySelectTop.value == "dolar-to" && currencySelect.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputCurrencyValue / euroToday)
}

if(currencySelectTop.value == "dolar-to" && currencySelect.value == "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "GBP"
    }).format(inputCurrencyValue / libraToday)
}

if(currencySelectTop.value == "euro-to" && currencySelect.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "EUR"
    }).format(inputCurrencyValue)
}

if(currencySelectTop.value == "euro-to" && currencySelect.value == "real") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue / euroToday)
}

if(currencySelectTop.value == "euro-to" && currencySelect.value == "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "GBP"
    }).format(inputCurrencyValue / libraToday)
}

if(currencySelectTop.value == "libra-to" && currencySelect.value == "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "GBP"
    }).format(inputCurrencyValue)
}

if(currencySelectTop.value == "libra-to" && currencySelect.value == "real") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue / libraToday)
}

if(currencySelectTop.value == "libra-to" && currencySelect.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
    }).format(inputCurrencyValue / dolarToday)
}

if(currencySelectTop.value == "libra-to" && currencySelect.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(inputCurrencyValue / libraToday)
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".bandeira-eua")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/bandeira-eua.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro2.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra44.png"
    }

    convertValues()

}

function changeCurrencyTop() {
    const currency = document.querySelector(".currecy")
    const currecyTopImg = document.querySelector(".bandeira-br")

    if(currencySelectTop.value == "real-to") {
        currency.innerHTML = "Real"
        currecyTopImg.src = "./assets/bandeira-brasil2.jpg"
    }

    if(currencySelectTop.value == "dolar-to") {
        currency.innerHTML = "Dólar americano"
        currecyTopImg.src = "./assets/bandeira-eua.png"
    }

    if(currencySelectTop.value == "euro-to") {
        currency.innerHTML = "Euro"
        currecyTopImg.src = "./assets/Euro2.png"
    }

    if(currencySelectTop.value == "libra-to") {
        currency.innerHTML = "Libra"
        currecyTopImg.src = "./assets/libra44.png"
    }
    
    convertValues()
}

currencySelectTop.addEventListener("change", changeCurrencyTop)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)