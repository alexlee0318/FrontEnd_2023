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


//1~1000까지의 숫자가 있다. 0은 몇번, 1은 몇번, ..., 9는 몇번 사용되는가?
//반복문을 써라
// 문자열 만들기 
function strCount(str, dst){            //str에서 dst가 몇번 사용되는가
    return str.split(dst).length -1;
}
let numStr = '';
    for (let i = 1; i <= 1000; i++)
    numStr += i;                    // 123456789....9991000
console.log(numStr.length);
for (let num = 0; num <= 9; num++) {
   // let count = numStr.split(String(num)).length - 1;
   let count = strCount(numStr, String(num));
    console.log(`${num} 은 ${count}번 사용됨.`);
}
