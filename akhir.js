function checkScientificNumber() {
    var numberInput = document.getElementById("numberInput").value;
    var resultDiv = document.getElementById("result");

    // Regular expression to match scientific number format
    var scientificPattern = /^[-+]?[0-9]*\.?[0-9]+(?:[eE][-+]?[0-9]+)?$/;

    if (scientificPattern.test(numberInput)) {
        resultDiv.innerHTML = "<strong>" + numberInput + "</strong> is a scientific number.";
        resultDiv.className = "valid";
    } else {
        resultDiv.innerHTML = "<strong>" + numberInput + "</strong> is not a scientific number.";
        resultDiv.className = "invalid";
    }
}


