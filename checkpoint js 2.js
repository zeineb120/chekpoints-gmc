function reverseString(str) {
    // split() transforme la chaîne en tableau [cite: 193]
    // reverse() inverse l'ordre 
    // join() rassemble le tout en une chaîne [cite: 52]
    return str.split("").reverse().join("");
}




function countCharacters(str) {
    return str.length;
}



function capitalizeWords(sentence) {
    return sentence.split(" ").map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
}


function findMax(arr) {
    return Math.max(...arr); // Math.max() [cite: 255]
}

function findMin(arr) {
    return Math.min(...arr); // Math.min() [cite: 255]
}







function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; // Opérateur d'addition [cite: 73]
    }
    return sum;
}



function filterArray(arr, condition) {
    return arr.filter(condition);
}
// Exemple: filterArray([1, 2, 3, 4], x => x > 2);

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i; // Multiplication [cite: 75]
    }
    return result;
}



function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) { // Math.sqrt() [cite: 255]
        if (num % i === 0) return false; // Modulo 
    }
    return true;
}




function generateFibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        // On ajoute le nouveau terme avec push() [cite: 56]
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib.slice(0, n);
}