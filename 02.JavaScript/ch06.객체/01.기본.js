//객체(Object)

//배열(Array)
let fruits = ['딸기', '사과', '수박', '참외'];     // ---> 객체를 생성
console.log(typeof fruits);

let fruitObj = {0: '딸기', 1:'사과', 2:'수박', 3:'참외'}; //  '키(인덱스): 밸류' 쌍으로 이뤄진 것이 Object
console.log(fruits[0], fruitObj[1]);    // 두 형태 모두 사용 가능

//객체(Object, Python dictionary, Haca Map)
let personArray = ['알렉스', 28, '여자', 161, '프로그래머', 30.0];
let personInfo = {
    name:'알렉스', age:28, gender:'여자', // key값을 각각 붙여줌
    height:161, jop:'프로그래머', bmi:30.0 // key가 srting인 경우 따옴표 생략 가능. 밸류에는 무조건 붙여야 함.
}
console.log(personArray);
console.log(personInfo);

//객체에 대한 접근
console.log(personInfo['name']);   //굳이 이런 형태로 쓰지 x 아래의 형태로 많이 사용
console.log(personInfo.name);        //
let key = 'age';
console.log(personInfo[key]);       //key값을 변수로 받을 때는 []사용함