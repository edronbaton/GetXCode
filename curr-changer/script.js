window.addEventListener("DOMContentLoaded", function () {
    let amount = this.document.querySelector(".amount__curr"),
        selectFrom = this.document.querySelector(".select__from"),
        selectTo = this.document.querySelector(".select__to"),
        resultValue = this.document.querySelector(".result__value"),
        calculate = this.document.querySelector(".convert");

    let currencies = {
        "USD": {
          "UAH": 38,
          "EURO": 0.93,
          "symbol": "$"
        },
        
        "EURO": {
          "UAH": 43,
          "USD": 1.07,
          "symbol": "€"
        },

        "UAH": {
          "USD": 0.02,
          "EURO": 0.02,
          "symbol": "₴"
        }
    };

    calculate.addEventListener("click", function () {
        if (amount.value <= 0 || !Number.isInteger(Number(amount.value)) || (typeof Number(amount.value)) == "string") {
            return "error"           
        } else {
            resultValue.textContent = `${Math.round(amount.value / currencies[selectTo.value][selectFrom.value])} ${currencies[selectTo.value]["symbol"]}`;
        }
        
    })
    
})