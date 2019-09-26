document.addEventListener("DOMContentLoaded", function() {    
    document.getElementById("convert").addEventListener("click", function() {    
        let amount = document.getElementById("amount").value;

        if (amount.length == 0) {
            alert("You have to input some number value!");
            return;
        }

        if (amount <= 1) {
            alert("The value must be bigger than 1!");
            return;
        }

        let currency = document.querySelector('input[name="currency"]:checked').value;
        switch (currency) {
            case "USD":
                callApiCurrency("USD", amount);
                break;
            case "EUR":
                callApiCurrency("EUR", amount);
                break;
        }
    });
    
    function callApiCurrency(currency, amount) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.exchangerate-api.com/v4/latest/' + currency);
        xhr.onload = function() {
            if (xhr.status === 200) {
                updateResults(JSON.parse(xhr.responseText), amount);
            }
            else {
                alert('Request failed. Returned status of ' + xhr.status);
            }
        };
        xhr.send();
    }

    function updateResults(response, amount) {
        rates = response["rates"];
        curvnd = rates["VND"];
        result = parseInt(amount) * 1.0 / parseInt(curvnd);
        document.getElementById("result").innerHTML = result;
    }
});