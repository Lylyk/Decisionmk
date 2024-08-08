function fibonacci(n) {
    // Base cases
    if (n === 0) {
        return 0; // Fibonacci(0) = 0
    } else if (n === 1) {
        return 1; // Fibonacci(1) = 1
    } else {
        // Recursive case
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Example usage
const n = 6; // Change this value to compute a different Fibonacci number
console.log(`Fibonacci(${n}) = ${fibonacci(n)}`); // Output: Fibonacci(6) = 8
