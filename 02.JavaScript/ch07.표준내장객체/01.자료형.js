//기본자료형 - primitive type
let number = 273.14;
let string = 'Hello!';
let boolean = true;
console.log(typeof (number), typeof(string), typeof(boolean));

let numObj = new Number(273.14);
let strObj = new String('Hello!');
let boolObj = new Boolean(true);
console.log(typeof (number), typeof(string), typeof(boolean));

//객체 자료형 - 기본 자료형을 객체로 만든것을 Wrap class라 부름.
console.log(number ==numObj, number === numObj); // === :일치연산자- (JS에만 있음)값도 같고 타입도 같다!!

let fruits =  '사과, 딸기, 바나나';        //string에는 splite이라는 메소드가 있음
console.log(fruits.split(','));          //split: srting을 분리-> arry로 만드는 메소드
                                            // --> 원리: ,을 찍어줌 -> primitive타입을 Wrap class로 자동으로 바꿔줌