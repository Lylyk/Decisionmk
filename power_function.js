// Recursive function to calculate base raised to the power exponent
function power(base, exponent) {
    // Base case: any number raised to the power of 0 is 1
    if (exponent === 0) {
        return 1;
    }
    // Base case: if the exponent is negative, calculate the positive exponent and take the reciprocal
    else if (exponent < 0) {
        return 1 / power(base, -exponent);
    }
    // Recursive case
    else {
        return base * power(base, exponent - 1);
    }
}

// Example usage
const base = 2;  // Change this value for different bases
const exponent = 5;  // Change this value for different exponents
console.log(`${base} raised to the power of ${exponent} is: ${power(base, exponent)}`); // Output: 2 raised to the power of 5 is: 32
