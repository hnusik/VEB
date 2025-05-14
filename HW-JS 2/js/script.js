document.addEventListener('DOMContentLoaded', () => {
   // Функція для перевірки, чи є значення цілим числом
    function isInteger(value) {
        return Number.isInteger(Number(value));
    }
   // Функція для отримання цілого числа від користувача
    function getIntegerInput(promptMessage) {
        let value;
        do {
            value = prompt(promptMessage);
        } while (!isInteger(value));
        return Number(value);
    }
// Отримуємо число від користувача та знаходимо всі числа, кратні 5
    const userNumber = getIntegerInput("Please enter a number:");
    const multiplesOfFive = [];
    
    for (let i = 0; i <= userNumber; i++) {
        if (i % 5 === 0) {
            multiplesOfFive.push(i);
        }
    }
    if (multiplesOfFive.length > 0) {
        console.log(`Multiples of 5 from 0 to ${userNumber}:`, multiplesOfFive.join(', '));
    } else {
        console.log("Sorry, no numbers");
    }
// Пошук простих чисел у діапазоні від m до n
    const m = getIntegerInput("Please enter the first number (m):");
    const n = getIntegerInput("Please enter the second number (n):");
    const lowerBound = Math.min(m, n);
    const upperBound = Math.max(m, n);
// Функція для перевірки, чи є число простим
    function isPrime(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    const primeNumbers = [];
    for (let i = lowerBound; i <= upperBound; i++) {
        if (isPrime(i)) {
            primeNumbers.push(i);
        }
    }
    if (primeNumbers.length > 0) {
        console.log(`Prime numbers from ${lowerBound} to ${upperBound}:`, primeNumbers.join(', '));
    } else {
        console.log("Sorry, no prime numbers");
    }
});
