// M := λf.ff
// Self application combinator
const M = (f) => f(f);

const I = (a) => a;

console.log(M(I));

/*
  M := λf.ff
  M I = I I = I

  M(I) === I(I) && I(I) === I
*/
