//자료형 변환
console.log(123, String(123));   //강제변환
console.log(Number('101'), Number(true), Number(false), Number('Hello')); // Not a Number
//다음의 경우를 제외하면 모두 참이 됨
console.log(Boolean(0), Boolean(0.0), Boolean(''), Boolean(undefined), Boolean(NaN), Boolean(null)); // .0 이나 0. 이나 0.00000 모두 false임 
console.log(Boolean(0.000001), Boolean(' '), Boolean({}));  

//자동변환
//boolean -> Number -> string
console.log('bool ' + true, 'integer ' + 123, 123 + true);

//    -, *. /인 경우:  string -> number로 바뀜
console.log('52'- 273, '8' * 8, '4' / 2);

/* <일치 연산자> 값이 같은지 비교
 1) 변환된 값이 같으면, true(같다) */
console.log(52 == 52.0, 52 == '52');     //true, true
console.log(true ==1, false == 0.0);    //true, true

/* 2) 변환된 값과 자료형이 일치해야 같다.*/
console.log(52 === 52.0, 52 === '52');      //true, false
console.log(true === 1, false === 0.0);  //false, false

