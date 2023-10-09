// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

document.addEventListener("DOMContentLoaded", function() {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitSpan = document.getElementById("fahrenheit");
    const convertBtn = document.getElementById("convertBtn");

    convertBtn.addEventListener("click", function() {
        const celsiusValue = parseFloat(celsiusInput.value);
        if (!isNaN(celsiusValue)) {
            const fahrenheitValue = celsiusToFahrenheit(celsiusValue);
            fahrenheitSpan.textContent = fahrenheitValue.toFixed(2) + " °F";
        } else {
            fahrenheitSpan.textContent = "Invalid input";
        }
    });
});