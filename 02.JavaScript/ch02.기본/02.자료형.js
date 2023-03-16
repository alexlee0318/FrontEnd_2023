console.log(5 / 2);
console.log(5 % 2); //moduler : 나머지 계산자  **정수- 홀/짝, 약수/배수 알 수 있음
console.log(2 ** 10); // 2d의 10의 제곱, 1024
console.log(1.3e8); // 1.3 x 10 ** 8     (e는 노테이션)
console.log(1.3e-8); // 1.3 x 10 ** -8

// 2. 문자열(string)* escape 문자
console.log('she said " "I love you." ');
console.log("she said \"I love you.\" ");
console.log('she\tsaid\nI love you." ');
console.log('Back slash 기호(\\)를 사용할 때는 \\두개를 쓰면 된다.');
console.log(hello[0], hello[5]);
//자바스크립트는 대부분 0부터 시작

//template literal(`)
let a = 2, b =3;
onsole.log(a, '더하기', b, '을 한 결과는', 2 + 3, '입니다.');
onsole.log(`2더하기 3을 한 결과는 ${2+3} 입니다.`);
console.log(`she said "I love you." `);
console.log(`올해는 &{new date().getFullYear()}년입니다.`)

//논리형(Boolean)    !    ||   &&
console.log(typeof(true), typeof false); //Boolean
console.log(2 ==2.0, 5 >=4, '가나다' > '마바사'); //앞에있는 숫자부터 작은 숫자이므로 가나다는 false
console.log(2 ==2.0, 5 >=4, !('가나다' > '마바사')); //참
let x = 10;
console.log(x > 8 || x < -3);       // x>8 또는 x<-3 조건
console.log(x >= 0 && x <= 5);      // 0 <= x <=5  
console.log(true > 10);             // true가 숫자 1로 자동 변환되어 비교가 됨. 

