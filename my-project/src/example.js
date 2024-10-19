// Duplicate Code Example
function add(a, b) {
    return a + b;
}

function addAgain(a, b) {
    return a + b; // Duplicate code
}

// Type Coercion Example
console.log(add(5, '10')); // Will concatenate instead of adding
console.log(add(5, undefined)); // Undefined handling
console.log(add(null, 10)); // Null handling
