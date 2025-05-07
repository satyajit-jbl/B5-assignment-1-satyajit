"use strict";
function formatString(input, toUpper) {
    return toUpper ? input.toUpperCase() : input.toLowerCase();
}
console.log(formatString("Hello"));
console.log(formatString("Hello", true));
console.log(formatString("Hello", false));
