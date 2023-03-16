// 조건연산자, 3항 연산자
let num = 3;
let evenOdd = (num % 2 == 0) ? '짝수' : '홀수';   //3항 연산자 :   조건? 참일때 값 : 거짓일 때 값
console.log(`${num}은/는 ${evenOdd}입니다.`);

///***사용 예시***
//메뉴버튼에 active 넣을 때 쓰임
//html에서 반드시 한 줄로 써야할 때

let variable;
variable = (typeof(variable) == 'undefined') ? 0 :variable;
console.log(variable);          //variable 값을 주지 않았기 때문에 결과는 0

