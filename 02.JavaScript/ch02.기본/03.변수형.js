let pi = 3.1415926535;
let radius = 10;

console.log('둘레:', 2 *pi * radius);
console.log(`면적: ${pi * radius ** 2}`);

//복합 대입 연산자
let a = 1;
a += 2;        // a=a+2 와 같음
console.log(a);
let str = '';
str += 'A quick brown fox';
str += ' ' + 'jumps over the lazy dog';
console.log(str);

//증감 연산자
let x= 0, y = 0;
console.log(x++, ++y);   //post-increment, pre-increment(참조되기 전에 +1이 일어남)
console.log(x, y);
console.log(x--, --y);   //post-decrement, pre-decrement(참조되기 전에 -1이 일어남)
console.log(x, y);

//나머지 자료형
//4. 함수(function)
console.log(typeof function( ) { });
console.log(typeof(( ) => {}));      //화살표 함수(arrow) , 람다함수

//5. 객체(object)  *많이 사용됨 html에서 img의 속성 같은 것(alt, width, height값 등등이 x, y)
let obj = {x: 1, y: 2};
console.log(typeof obj);
console.log(obj.x, obj.y);

//6. undefied
let alpha;
console.log(typeof alpha, typeof beta);   //초기화하지 않은 변수, 선언하지 않은 변수
alpha = 123;
console.log(typeof alpha);
