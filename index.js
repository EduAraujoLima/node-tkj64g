// ((a) => a)((b) => (c) => b)(x)((e) => 5);

//Identity function
const A = (a) => a;

//Ignore the c parameter and always return b
const B = (b) => (c) => b;

//Constant with 1 atributed
const X = 1;

//Takes a argument but always return 5
const F = (e) => 5;

//Should return X - cause the c parameter(3) is ignored
const AB = B(A(X))(3);

//Should return 5 - cause the e parameter is ignored
const ABF = F(AB);

console.log(AB);
console.log(ABF);
