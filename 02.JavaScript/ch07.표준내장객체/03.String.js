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

//디지털시계 00:00 ~ 23:59
//하루동안 3이 적어도 한 개 표시되는 시간은 몇초인가?
//forloop들어갈 떈 항상 초기화를 먼저 한다!!(totalSeconds = 0;)
let totalSeconds = 0;
for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute++) {
         let display = hour + ':' + minute;
         if (display.indexOf('3') >= 0)  // 0 이상의 값을 반환(00:00이 나오면 -3이 되므로)
             totalSeconds +=60;
    }
}
console.log(totalSeconds);


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

//1~1000까지의 숫자가 있다. 0은 몇번, 1은 몇번, ..., 9는 몇번 사용되는가?
//반복문을 써라
// 문자열 만들기 
let numStr = '';
    for (let i = 1; i <= 1000; i++)
    numStr += i;                    // 123456789....9991000
console.log(numStr.length);
for (let num = 0; num <= 9; num++) {
    let count = numStr.split(String(num)).length - 1;
    console.log(`${num} 은 ${count}번 사용됨.`);
}

// isPalindrom 함수 만들기 -> 핵씸: 먼저 reverseStr을 만드는 것. 그 이후에 Str과 비교하기.
function isPalindrome(str) {
    let reverseStr = '';
    for (let i = str.length - 1; i>= 0; i--)
        reverseStr += str[i];
    return Str == reverseStr;
}
console.log(isPalindrome('우영우'));
cpnsole.log(isPalindrome('소주 만병만 주소'));


// 다음 경로에서 파일명만 출력하세요. c:\\program Files\\nodejs\\node.exe 
    //   방법 1
const path = 'c:\\program Files\\nodejs\\node.exe'
let index = path.lastIndexOf('\\');
let filename = path.substring(index + 1);
console.log(filename);
    //   방법 2
let pathArray = path.split('\\');
console.log(pathArray[pathArray.length -1]);
