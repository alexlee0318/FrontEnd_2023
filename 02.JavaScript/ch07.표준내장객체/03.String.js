//String 객체

let stringFromLiteral = '안녕하세요?';
let stringFromConstructor = new String('안녕하세요');

//속성 - attriubute, property
console.log(stringFromLiteral.length);      //Length 글자길이

// 메소드(method)
let str = '안녕하세요?';
console.log(str[0], str.charAt(0));
console.log(str.concat('여러분!'))  // 안녕하세요?여러분!
console.log(str.indexOf('하'));  // '하'의 위치 리턴함 - 있는지 없는지 알아보는 데 쓸 수도 있음
console.log('pineapple'.lastIndexOf('p'));   //끝에서부터 값 찾기

//정규표현식 (Regular Expression)
const sample = 'ㅠㅠA quick brown fox 갈색의 재빠른 여우가 Jump over the lazy dog. 게으른 개를 ㅋㅋ'

let newStr = sample.replace('A', 'a');
console.log(newStr); 

newStr = sample.replace(/[A-Z]/, '대');  //한 개만 바꿈
console.log(newStr);
newStr = sample.replace(/[A-Z]/g, '대');  //g추가하면 모두 바꿈(global하게)
console.log(newStr);

//한글 제거
newStr = sample.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g, '');
console.log(newStr);

//한글과 공백만 남기고 모두제거
newStr = sample.replace(/[^ㄱ-ㅎㅏ-ㅣ가-힣 ]/g, '');
console.log(newStr);

//문자열을 분리하여 배열을 반환
let fruitString = '사과, 배 , 감, 포도';
let fruitArray = fruitString.split(',');
console.log(fruitArray);

//문자열 일부분 추출
const today = new Date().toISOString();
console.log(today);                     // 2023-03-20T06:51:56.013Z
console.log(today.substring(0, 10));    // 2023-03-20 (날짜만 추출)
console.log(today.substring(11, 19));  //06:51:56 (시간만 추출)   **앞 숫자에 추출할 총 글자 수만큼 더하면 됨
console.log(new Date().getHours());

// YYY-MM-DD hh:mm:ss 형식으로 만들어주는 함수(내가 하고싶은 format 설정하기). 띄어쓰기 인식
//결과 :   2023-0320 16:11:51
function twoDigit(num) {
    return (num < 10) ? '0' + num : String(num); // 한자리 숫자-> 두자리 숫자로 만들기(앞에 0 붙여줌)
}
function myDatetime() {
    let now = new Date();
    return `${now.getFullYear()}-${twoDigit(now.getMonth()+1)}-${twoDigit(now.getDate())} ` + 
        `${twoDigit(now.getHours())}:${twoDigit(now.getMinutes())}:${twoDigit(now.getSeconds())}`;
}

let now = myDatetime();
console.log(now);               
console.log(now.substring(2));  // 23-03-20 16:12:38, 두번째 인수를 생략하면 맨 끝까지 (...????)

console.log('  hello  '.trim());    //양 끝의 공백을 없애줌

console.log('33'.split('3').length);            //[ '', '', '']
console.log('13131'.split('3').length);         //[ '1', '1', '1'] ==> 3을 기준으로 앞,뒤의 숫자만 추출


