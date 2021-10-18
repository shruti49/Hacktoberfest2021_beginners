// AUTHOR: Thushara Thiwanka
// JavaScript Concept: Logical operators
// GITHUB: https://github.com/thusharathiwanka

/**
 * Logical operators does logical comparisons and perform logical operations. There are mainly 3 logical operators
 * && - Logical AND
 * || Logical OR
 * ! - Logical NOT
 */

const isTrue = true;
const isFalse = false;

/**
 * && - Logical AND
 * This operator evaluates to true if the both values are true (EXAMPLE 01) if one of values (EXAMPLE 02) or both
 * values are false (EXAMPLE 03) operator evaluates as false
 */

// EXAMPLE 01 - Prints true
console.log(isTrue && isTrue);
// EXAMPLE 02 - Prints false
console.log(isTrue && isFalse);
// EXAMPLE 03 - Prints false
console.log(isFalse && isFalse);

/**
 * || - Logical OR
 * This operator evaluates to true if the both values are true (EXAMPLE 04) or one of values is true (EXAMPLE 05) If
 * the both values are false (EXAMPLE 06) operator evaluates as false
 */

// EXAMPLE 04 - Prints true
console.log(isTrue || isTrue);
// EXAMPLE 05 - Prints true
console.log(isTrue || isFalse);
// EXAMPLE 06 - Prints false
console.log(isFalse || isFalse);

/**
 * ! - Logical NOT
 * This operator evaluates to true if the given value is false and vice-versa (EXAMPLE 07)
 */

// EXAMPLE 07
// Prints false
console.log(!isTrue);
// Prints true
console.log(!isFalse);
