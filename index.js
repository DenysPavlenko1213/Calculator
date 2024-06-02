const CalculatorDisplay = document.getElementById("CalculatorDisplay");
function appendToDisplay(input) {
    CalculatorDisplay.value += input;
}
function clearDisplay() {
    CalculatorDisplay.value = "";
}
function calculate() {
    try {
        CalculatorDisplay.value = eval(CalculatorDisplay.value);
    }
    catch (error) {
        CalculatorDisplay.value = "Error";
    }
}
