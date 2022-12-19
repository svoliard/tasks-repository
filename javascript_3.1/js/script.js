function checkForNumber(firstNumber, secondNumber) {
    return ((firstNumber < 0) && (secondNumber > 0)) || ((firstNumber > 0) && (secondNumber < 0)) ? true : false;
}
checkForNumber(10, -15);
