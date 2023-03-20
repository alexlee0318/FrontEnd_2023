//Number 객체- JS에서 숫자를 표현할 때 사용

// 1)숫자 바로 만들기
let numberFromLiteral = 273;        //273이 Literal이다
let numberFromConstructor = new Number(273);   //생성자 함수- ew+대문자 조합

// 2)객체로 만들기
const pi = Math.PI;
console.log(pi);                        //3.141592653589793
console.log(pi.toExponential());      //3.141592653589793e+0 문자열로 바꿔줌
console.log(pi.toFixed(5));          //3.14159
console.log(pi.toPrecision(3));     //3.14 소숫점 2자리수까지

// 3) 생성자 함수로 만들기
console.log(Number.MAX_VALUE, Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
console.log(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
console.log(Math.pow(2, 53) - 1);       //Number.MIN_SAFE_INTEGER
