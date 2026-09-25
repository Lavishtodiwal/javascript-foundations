console.log(Boolean(0))
console.log(Boolean(-0))
console.log(Boolean(false))
console.log(Boolean(0n))
console.log(Boolean(""))
console.log(Boolean(undefined))
console.log(Boolean(NaN))


console.log(Boolean(0));        // false
console.log(Boolean(""));       // false
console.log(Boolean("Hello"));  // true
console.log(Boolean("0"));      // true
console.log(Boolean([]));       // true