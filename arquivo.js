const botaoConvert = document.querySelector(".botao-convert");
const currencySelect = document.querySelector(".currency-Select");
const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
const currencyValueConverted = document.querySelector(".currency-value");
const currencyName = document.getElementById("currency-name");
const currencyImage = document.querySelector(".estados")

const dolarToday = 5.2;
const euroToday = 6.2;

function convertValues() {
    const inputCurrencyValue = (document.querySelector(".inputCurrency").value);
    
    if (currencySelect.value === "dolar") {
        const convertedValue = inputCurrencyValue / dolarToday;
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(convertedValue);
    }

    if (currencySelect.value === "euro") {
        const convertedValue = inputCurrencyValue / euroToday;
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(convertedValue);
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue);
}

function changeCurrency() {
    if (currencySelect.value === "dolar") {
        currencyName.innerHTML = "Dólar ";
        currencyImage.src="./assets/dolar.png";
    }

    if (currencySelect.value === "euro") {
        currencyName.innerHTML = "Euro";
        currencyImage.src="./assets/euro.png";
    }
   }
   

currencySelect.addEventListener("change", changeCurrency);
botaoConvert.addEventListener("click", convertValues);