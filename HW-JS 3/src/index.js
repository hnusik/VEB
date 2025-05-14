document.addEventListener('DOMContentLoaded', () => {

    function isNumber(value) {
        return !isNaN(value) && value.trim() !== '';
    }

        function getNumberInput(promptMessage, defaultValue = '') {
        let value;
        do {
            value = prompt(promptMessage, defaultValue);
        } while (!isNumber(value));
        return Number(value);
    }


    function getOperationInput(promptMessage) {
        let operation;
        const validOperations = ['+', '-', '*', '/'];
        do {
            operation = prompt(promptMessage);
        } while (!validOperations.includes(operation));
        return operation;
    }


    function calculate(num1, num2, operation) {
        switch (operation) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                return num1 / num2;
            default:
                return null;
        }
    }


    const num1 = getNumberInput("Please enter the first number:");
    const num2 = getNumberInput("Please enter the second number:", num1);
    const operation = getOperationInput("Please enter the operation (+, -, *, /):");


    const result = calculate(num1, num2, operation);
    console.log(`The result of ${num1} ${operation} ${num2} is: ${result}`);
});
