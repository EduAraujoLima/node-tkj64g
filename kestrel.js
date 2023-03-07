const identity = (x) => x;

const kestrel = (x) => (y) => x;

const result = kestrel((x) => x * 2)(identity)(3);

console.log(result); // Output: 1
