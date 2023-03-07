const M = (f) => f(f);

const somatorio = M(
  (f) =>
    (arr) =>
    (index = 0) =>
    (total = 0) =>
      index === arr.length ? total : f(f)(arr)(index + 1)((total += arr[index]))
);

console.log(somatorio([1, 2, 3, 4])()());

const factorial = M((f) => (n) => n === 0 ? 1 : n * f(f)(n - 1));
