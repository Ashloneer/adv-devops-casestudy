// Import the functions to test
const { add, addAgain } = require('./path/to/your/code'); // Update the path accordingly

describe('Add Functions', () => {
    test('adds two numbers correctly', () => {
        expect(add(5, 10)).toBe(15);
    });

    test('adds a number and a string (type coercion)', () => {
        expect(add(5, '10')).toBe('510'); // Concatenation occurs
    });

    test('handles undefined input', () => {
        expect(add(5, undefined)).toBe(NaN); // Adding to undefined results in NaN
    });

    test('handles null input', () => {
        expect(add(null, 10)).toBe(10); // null is treated as 0 in addition
    });

    test('checks for duplicate code in addAgain', () => {
        // This test checks if addAgain function behaves the same way as add
        expect(addAgain(5, 10)).toBe(15);
    });
});
