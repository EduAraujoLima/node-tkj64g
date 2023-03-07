const I = (a) => a;
// I := λa.a
// λ - Function Signifier / Parameter variable / Return expression
// Lambda abstraction

/* 
  expression ::= variable                 identifier
               | expression expression    application
               | λ variable . expression  abstraction
               | ( expression )           grouping
*/

const add = (a) => (b) => a + b;
// f a b  / f(a)(b)
// (f a)b / (f(a))(b)
// f(a b) / f(a(b))

const addOne = add(1);
console.log(addOne(2));

/* 
  λa.b      a => b
  λa.b x    a => b(x)
  λa.(b x)  a => (b(x))
  (λa.b) x  (a => b => a)
*/

/* 
  B-Reduction
  ((λa.a)λb.λc.b) (x)λe.f
  (λb.λc.b) (x)λe.f
  (λc.x)  λe.f
  x
*/

//((a => a)(b => c => b))(x)(e => f)

/*
  Abstractions
  λa.λb.λc.b  a => b => c => d
*/

const ABC = (a) => (b) => (c) => b;

console.log(ABC(1)(2)(3));

console.log(x => y => y)
