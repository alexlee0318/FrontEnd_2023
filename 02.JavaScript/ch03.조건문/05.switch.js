// switch - multi select

let score = 84;
let scoreDigit = parseInt(score / 10);     //10으로 나눈 몫의 정수 (parseInt :정수값)
let grade;                              //grade = 'F'로 세팅하면 밑에 default값 부분을 없애도 무방.

switch(scoreDigit) {
    case 10:
    case 9:
        grade = 'A'; break;          //***break: 탈출하라는 뜻.- 안 넣으면 defaul값이 됨
    case 8:
        grade = 'B'; break;
    case 7:
        grade = 'C'; break;
    case 6:
        grade = 'D'; break;
    default:        //5이하 나머지는 defaul 
        grade = 'F';
    }
    console.log(`성적: ${score}, 학점: ${grade}`);