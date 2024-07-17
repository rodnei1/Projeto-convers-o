const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
const currencySelectTop = document.querySelector(".currency-select-top");

const rates = {
    "BRL": 1,
    "USD": 5.2,
    "EUR": 6.19,
    "GBP": 6.89
};

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value");

    const fromCurrency = currencySelectTop.value;
    const toCurrency = currencySelect.value;


    const inputAmount = parseFloat(inputCurrencyValue);
    const convertedValue = (inputAmount / rates[fromCurrency]) * rates[toCurrency];

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: fromCurrency
    }).format(inputAmount);

    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: toCurrency
    }).format(convertedValue);
}

function changeCurrency() {
    const currencyBottom = document.querySelector(".currency-bottom");
    const currencyBottomImg = document.querySelector(".bandeira-bottom");

    if (currencySelect.value == "USD") {
        currencyBottom.innerHTML = "Dólar Americano";
        currencyBottomImg.src = "./assets/bandeira-eua.png";
    } else if (currencySelect.value == "EUR") {
        currencyBottom.innerHTML = "Euro";
        currencyBottomImg.src = "./assets/euro2.png";
    } else if (currencySelect.value == "GBP") {
        currencyBottom.innerHTML = "Libra";
        currencyBottomImg.src = "./assets/logo-libra.webp";
    } else if (currencySelect.value == "BRL") {
        currencyBottom.innerHTML = "Real Brasileiro";
        currencyBottomImg.src = "./assets/bandeira-brasil2.jpg";
    }

    convertValues();
}

function changeCurrencyTop() {
    const currencyTop = document.querySelector(".currency-top");
    const currencyTopImg = document.querySelector(".bandeira-top");

    if (currencySelectTop.value == "BRL") {
        currencyTop.innerHTML = "Real";
        currencyTopImg.src = "./assets/bandeira-brasil2.jpg";
    } else if (currencySelectTop.value == "USD") {
        currencyTop.innerHTML = "Dólar Americano";
        currencyTopImg.src = "./assets/bandeira-eua.png";
    } else if (currencySelectTop.value == "EUR") {
        currencyTop.innerHTML = "Euro";
        currencyTopImg.src = "./assets/euro2.png";
    } else if (currencySelectTop.value == "GBP") {
        currencyTop.innerHTML = "Libra";
        currencyTopImg.src = "./assets/logo-libra.webp";
    }

    convertValues();
}

currencySelectTop.addEventListener("change", changeCurrencyTop);
currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
