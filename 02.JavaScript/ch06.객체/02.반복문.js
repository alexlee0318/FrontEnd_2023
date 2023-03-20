let maria = {이름: '마리아', 나이: 25, 직업:'학생'};
console.log(maria.이름);

let name= '오창호';
let age = 25;
let job = '게이머';
let james = {name:name, age:age, job:job};
console.log(james);

//객체 반복문 : for ~ in을 사용한다.
for (let key in maria)
    console.log(key, ':', maria[key]);

    //ES-6 (2015년도에 제정된 표준)
    //let james = {name:name, age:age, job:job};  ==> 아래처럼 간소화 됨
    let james2 = {name, age, job}  //key값과 value를 가르키는 변수의 이름이 동일하면 변수명 생략 가능

    //JSON(JavaSCript Object Notation)
    //      외부와 데이터를 주고 받을 때 사용   #API
    //      사실상 업계 표준(de facto standard)
    let externalForm = JSON.stringify(james);
    console.log(typeof externalForm);                  //결과물은 obj가 아닌  srting : {"name":"오창호","age":25,"job":"게이머"} 
    console.log(externalForm);

    let person = JSON.parse(externalForm);
    console.log(person);
    console.log(person.name ===james.name && person.age == james.age);   // trus - person과 james의 정보가 같다.
