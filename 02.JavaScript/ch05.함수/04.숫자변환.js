//숫자변환 내장(built-in) 함수
//parseInt()    : 문자열 -> 정수 변환
//parseFloat()    : 문자열 -> 실수로 변환

const a = '123.65', b = '0xff', c = '23';

console.log(Number(a), Number(b));  
console.log(parseInt(a), parseFloat(a));    //parseInt(): 문자열 -> 정수 변환 parseFloat(): 문자열 -> 실수로 변환
console.log(parseInt(b), parseFloat(b), parseFloat(c));  //255, 0, 23

console.log(parseInt('1401동'), Number('1401동'));  //1401, NaN
console.log(parseInt('1401동 503호'));              //1401
