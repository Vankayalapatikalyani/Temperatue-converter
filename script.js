function convertTemp() {
    let temp = parseFloat(document.getElementById("tempInput").value);
    let fromUnit = document.getElementById("fromUnit").value;
    let toUnit = document.getElementById("toUnit").value;
    let resultText = "";

    if (isNaN(temp)) {
        resultText = "Please enter a valid number.";
    } else if (fromUnit === toUnit) {
        resultText = `No conversion needed: <strong>${temp.toFixed(2)}°${toUnit}</strong>`;
    } else {
        let convertedTemp;

        if (fromUnit === "C") {
            convertedTemp = temp;
        } else if (fromUnit === "F") {
            convertedTemp = (temp - 32) * 5/9;
        } else if (fromUnit === "K") {
            convertedTemp = temp - 273.15;
        }

        if (toUnit === "C") {
            resultText = `${temp}°${fromUnit} = <strong>${convertedTemp.toFixed(2)}°C</strong>`;
        } else if (toUnit === "F") {
            resultText = `${temp}°${fromUnit} = <strong>${(convertedTemp * 9/5 + 32).toFixed(2)}°F</strong>`;
        } else if (toUnit === "K") {
            resultText = `${temp}°${fromUnit} = <strong>${(convertedTemp + 273.15).toFixed(2)}K</strong>`;
        }
    }

    document.getElementById("result").innerHTML = resultText; 
}
